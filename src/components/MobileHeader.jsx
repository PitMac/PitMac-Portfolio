"use client";

import { usePathname, useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import { menuItems } from "./Sidebar";

export default function MobileHeader({ onMenuClick }) {
  const router = useRouter();
  const pathname = usePathname();

  const mainRoutes = menuItems.map((item) => item.href);
  const isMainRoute = mainRoutes.includes(pathname);
  const label = menuItems.find((item) => item.href === pathname)?.label;

  const parts = pathname.split("/");
  const lastSegment = parts[parts.length - 1];

  const formattedSlug = lastSegment
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  const title = label ?? formattedSlug;

  return (
    <header
      style={{ backgroundColor: "#1e1e1d" }}
      className="fixed top-0 left-0 right-0 h-14  flex items-center px-4  z-50"
    >
      {isMainRoute ? (
        <button
          aria-label="Abrir menú"
          className="p-2 rounded hover:bg-gray-700 transition"
          onClick={onMenuClick}
        >
          <Icon icon="ion:menu-outline" width="28" height="28" />
        </button>
      ) : (
        <button
          aria-label="Volver"
          className="p-2 rounded hover:bg-gray-700 transition flex items-center gap-1"
          onClick={() => router.back()}
        >
          <Icon icon="ion:arrow-back-outline" width="28" height="28" />
        </button>
      )}
      <h1 className="ml-4 font-bold text-lg truncate max-w-[70%]">{title}</h1>
    </header>
  );
}
