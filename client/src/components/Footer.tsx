/**
 * Footer - Pie de página con información de la tesis
 * Diseño: Verde oscuro, bordes redondeados, tipografía amigable
 */

export default function Footer() {
  return (
    <footer className="bg-[#1B5E20] text-white mt-16 rounded-t-3xl">
      <div className="container max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/manus-storage/logo_tesis_ec45a2d8.png"
              alt="Logo"
              className="w-8 h-8 rounded-full"
            />
            <div>
              <p className="font-bold text-sm">Tesis Digital - Biología</p>
              <p className="text-green-200 text-xs">Proyecto Educativo 2026</p>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-green-200 text-xs">
              Contenido educativo para estudiantes de secundaria
            </p>
            <p className="text-green-300 text-xs mt-1">
              Fuentes: Understanding Evolution, Khan Academy, National Geographic
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
