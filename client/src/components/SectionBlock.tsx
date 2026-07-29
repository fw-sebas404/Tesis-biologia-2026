/**
 * SectionBlock - Bloque de contenido reutilizable
 * Tarjeta con borde verde, fondo blanco, esquinas redondeadas
 */
interface SectionBlockProps {
  title: string;
  id?: string;
  children: React.ReactNode;
}

export default function SectionBlock({ title, id, children }: SectionBlockProps) {
  return (
    <section id={id} className="mb-10">
      <div className="bg-white rounded-2xl p-6 md:p-8 border-2 border-[#4CAF50]/20 shadow-sm">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#1B5E20] mb-4 flex items-center gap-2">
          <span className="w-3 h-3 bg-[#4CAF50] rounded-full inline-block" />
          {title}
        </h2>
        <div className="text-[#333] leading-relaxed">
          {children}
        </div>
      </div>
    </section>
  );
}
