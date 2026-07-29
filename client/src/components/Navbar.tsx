/**
 * Navbar - Menú superior para navegación entre secciones
 * Diseño: Verde claro, bordes redondeados, tipografía Nunito
 * Todas las esquinas redondeadas - NADA PUNTIAGUDO
 */
import { Link, useLocation } from "wouter";

const navItems = [
  { path: "/", label: "Inicio" },
  { path: "/microevolucion", label: "Microevolución" },
];

export default function Navbar() {
  const [location] = useLocation();

  return (
    <nav className="bg-white border-b-2 border-[#4CAF50]/20 sticky top-0 z-50 shadow-sm">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo y título */}
          <Link href="/">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Logo Tesis Digital"
                className="w-10 h-10 rounded-full object-cover border-2 border-[#2E7D32]/30"
              />
              <span className="font-bold text-lg text-[#2E7D32] hidden sm:block">
                Tesis Digital
              </span>
            </div>
          </Link>

          {/* Menú de navegación */}
          <div className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = location === item.path;
              return (
                <Link key={item.path} href={item.path}>
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                      isActive
                        ? "bg-[#4CAF50] text-white"
                        : "text-[#2E7D32] hover:bg-[#4CAF50]/10"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
