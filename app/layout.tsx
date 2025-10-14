import "./globals.css";
import { Toaster } from "sonner";
import ReactQueryProvider from "@/components/ReactQueryProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata = {
  title: "Abuja Detty December | 9ja’s Capital biggest December Celebration — music, dance, contests, and unforgettable memories.",
  description: "9ja’s Capital biggest December Celebration — music, dance, contests, and unforgettable memories.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        /> */}
        {/* <script src="https://js.paystack.co/v1/inline.js"></script> */}
      </head>
      <body className="bg-white text-black font-inter antialiased">
        <ReactQueryProvider>
          <Navbar />
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: "white",
                color: "black",
                border: "1px solid #e5e7eb",
              },
            }}
          />
          <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
