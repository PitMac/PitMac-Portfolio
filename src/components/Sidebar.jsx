"use client"; // Importante para usar hooks React en Next.js app dir

import Link from "next/link";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import MobileHeader from "./MobileHeader";
import { usePathname } from "next/navigation";

export const menuItems = [
  { href: "/", label: "Inicio", iconName: "ion:home-outline" },
  { href: "/projects", label: "Proyectos", iconName: "ion:briefcase-outline" },
  { href: "/about", label: "Sobre mí", iconName: "ion:person-circle-outline" },
  { href: "/contact", label: "Contacto", iconName: "ion:mail-outline" },
  { href: "/blog", label: "Blog", iconName: "ion:newspaper-outline" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) setIsMobileOpen(false);
  }, [isMobile]);

  return (
    <>
      {isMobile && <MobileHeader onMenuClick={() => setIsMobileOpen(true)} />}

      {(isExpanded || isMobileOpen) && (
        <div
          onClick={() => {
            setIsExpanded(false);
            setIsMobileOpen(false);
          }}
          className="fixed inset-0 z-40 transition-opacity"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        />
      )}

      <nav
        onMouseEnter={() => !isMobile && setIsExpanded(true)}
        onMouseLeave={() => !isMobile && setIsExpanded(false)}
        style={{ backgroundColor: "#1e1e1d" }}
        className={`
          fixed top-0 left-0 h-full text-white
          flex flex-col shadow-lg z-50
          rounded-tr-lg
          rounded-br-lg
          transition-all duration-300 ease-in-out

          ${isMobile ? "w-64" : isExpanded ? "w-56" : "w-14"}

          ${
            isMobile
              ? isMobileOpen
                ? "translate-x-0"
                : "-translate-x-full"
              : "translate-x-0"
          }

          ${isMobile ? "pt-12" : "pt-3"}
        `}
      >
        {menuItems.map(({ href, label, iconName }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={href}
              href={href}
              className={`
        flex items-center gap-3 py-4 px-4 cursor-pointer
        whitespace-nowrap transition-colors duration-200
        hover:bg-gray-700
        ${isActive ? "bg-gray-800 font-semibold text-indigo-400" : ""}
      `}
              onClick={() => isMobile && setIsMobileOpen(false)}
            >
              <div className="w-7 flex justify-center">
                <Icon
                  icon={iconName}
                  width="28"
                  height="28"
                  className={isActive ? "text-indigo-400" : "text-white"}
                />
              </div>
              <span
                className={`${isMobile || isExpanded ? "inline" : "hidden"}`}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
