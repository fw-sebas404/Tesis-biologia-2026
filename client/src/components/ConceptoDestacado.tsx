/**
 * ConceptoDestacado - Bloque destacado para conceptos clave
 * Fondo verde claro, borde izquierdo verde oscuro, esquinas redondeadas
 */
interface ConceptoDestacadoProps {
  title: string;
  children: React.ReactNode;
}

export default function ConceptoDestacado({ title, children }: ConceptoDestacadoProps) {
  return (
    <div className="bg-[#E8F5E9] border-l-4 border-[#2E7D32] rounded-xl p-4 my-4">
      <p className="font-bold text-[#1B5E20] text-sm mb-1">{title}</p>
      <div className="text-sm text-[#333] leading-relaxed">
        {children}
      </div>
    </div>
  );
}
