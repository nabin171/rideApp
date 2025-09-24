import { Inter } from "next/font/google";
import "./globals.css";
import PremiumNavbar from "@/Components/NavBar/page";
import PremiumFooter from "@/Components/Footer/page";
import { ToastContainer, toast } from "react-toastify";
import { GoogleOAuthProvider } from "@react-oauth/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleOAuthProvider
          clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
        >
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark" // 👈 matches your gradient dark UI
          />
          <PremiumNavbar /> {/* Appears on all pages */}
          <main>{children}</main> {/* Your page content */}
          <PremiumFooter /> {/* Appears on all pages */}
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
