import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: "Jhon Pita | Portafolio",
  description:
    "Desarrollador de Software especializado en aplicaciones móviles y web.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className=" text-white" style={{ backgroundColor: "#161513" }}>
        <Sidebar />
        <main className="min-h-screen font-sans pt-12 md:pt-0">{children}</main>
      </body>
    </html>
  );
}
