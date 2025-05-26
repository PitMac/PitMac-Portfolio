import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex gap-4 sticky top-0 z-10">
      <Link href="/" className="hover:text-blue-600 font-medium">
        Inicio
      </Link>
      <Link href="/about" className="hover:text-blue-600 font-medium">
        Sobre mí
      </Link>
      <Link href="/blog" className="hover:text-blue-600 font-medium">
        Blog
      </Link>
    </nav>
  );
}
