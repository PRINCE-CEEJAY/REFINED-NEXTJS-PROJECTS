import "./globals.css";
import Navbar from "./navbar/Navbar";
import UserProvider from "./components/UserProvider";

export const metadata = {
  title: "CEEJAY'S PORTFOLIO",
  description: "THIS IS A HUB FOR DISPLAYING MY CODING SKILLS",
};

export default function RootLayout({ children }) {
  const isLocked = process.env.NEXT_PUBLIC_PRIVATE_MODE === "true";
  if (isLocked) {
    return (
      <html lang="en">
        <body>
          <div className="flex items-center justify-center min-h-screen bg-black text-white">
            <div className="text-center">
              <h1 className="text-2xl font-bold">🚧 Site Under Construction</h1>
              <p className="mt-4">
                This project is not yet public. Please check back later.
              </p>
            </div>
          </div>
        </body>
      </html>
    );
  }
  return (
    <html lang="en">
      <UserProvider>
        <body>
          <div className="flex min-h-screen overflow-hidden">
            {/* Background Layer */}
            <div
              className="fixed inset-0 -z-10 bg-cover bg-center opacity-30"
              style={{
                backgroundImage: "url('/female-developer.jpg')",
              }}
            />
            <Navbar />
            {children}
          </div>
        </body>
      </UserProvider>
    </html>
  );
}
