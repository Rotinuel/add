import NextAuth, { type NextAuthOptions} from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { db } from './lib/db'; // Your MySQL connection
import { RowDataPacket } from "mysql2";

// --- User type ---
interface DBUser extends RowDataPacket {
  id: number;
  email: string;
  phone_number: number;
  password_hash: string;
  role: string;
}

// --- NextAuth configuration ---
const config: NextAuthOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        try {
          const [rows] = await db.query<DBUser[]>(
            "SELECT * FROM users WHERE email = ?",
            [credentials.email]
          );
          const user = rows[0];

          if (user && (await bcrypt.compare(credentials.password, user.password_hash))) {
            return { id: user.id.toString(), email: user.email, role: user.role } as any;
          }
          return null;
        } catch (error) {
          console.error("Authorization error:", error);
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.sub!;
        session.user.role = token.role as string;
      }
      return session;
    },
},
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
      const isAdminPage = nextUrl.pathname.startsWith("/dashboard/admin");

      if (isOnDashboard) {
        if (!isLoggedIn) {
          return Response.redirect(new URL("/login", nextUrl));
        }

        if (isAdminPage && auth.user.role !== "admin") {
          return Response.redirect(new URL("/unauthorized", nextUrl));
        }
      }

      return true;
    },

  pages: {
    signIn: "/login",
  },
};

// --- Export NextAuth handlers ---
export const { handlers, auth, signIn, signOut } = NextAuth(config);

