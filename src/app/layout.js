import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Jhon Pita | Portafolio",
  description:
    "Desarrollador de Software especializado en aplicaciones móviles y web.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-gray-100 text-gray-900">
        <Navbar />
        <main className="min-h-screen font-sans">{children}</main>
      </body>
    </html>
  );
}
