import "./globals.css";
import Navbar from "./navbar/Navbar";

export const metadata = {
  title: "QUIZ APP",
  description: "CODED BY PRINCE CEEJAY NG",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="relative min-h-screen overflow-hidden">
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
    </html>
  );
}
