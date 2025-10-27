'use client';

// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';

// export default function DashboardPage() {
//   const [user, setUser] = useState<any>(null);
//   const router = useRouter();

//   useEffect(() => {
//     const saved = localStorage.getItem("user");
//     if (!saved) {
//       router.push("/login");
//       return;
//     }
//     setUser(JSON.parse(saved));
//   }, [router]);

//   if (!user) {
//     router.push("/")
//     return;
//   };


//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
//       <h1 className="text-3xl font-bold mb-4">Welcome, {user.name}</h1>
//       <p className="text-gray-700">You are logged in as: <strong>{user.role}</strong></p>

//       <button
//         onClick={() => {
//           localStorage.removeItem("user");
//           router.push("/login");
//         }}
//         className="mt-8 bg-red-500 text-white px-4 py-2 rounded-lg"
//       >
//         Logout
//       </button>
//     </div>
//   );
// }

import { useSession } from "next-auth/react";

export default function DashboardPage() {
  const { data: session } = useSession();
  const user = session?.user;

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <p>Role: {user.role}</p>
    </div>
  );
}
