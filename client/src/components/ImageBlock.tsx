/**
 * ImageBlock - Imagen con caption y atribución
 * Bordes redondeados, centrada, con descripción
 */
interface ImageBlockProps {
  src: string;
  alt: string;
  caption: string;
  attribution?: string;
  className?: string;
}

export default function ImageBlock({ src, alt, caption, attribution, className = "" }: ImageBlockProps) {
  return (
    <figure className={`my-6 ${className}`}>
      <div className="overflow-hidden rounded-xl border-2 border-[#4CAF50]/20">
        <img
          src={src}
          alt={alt}
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>
      <figcaption className="mt-2 text-center">
        <p className="text-sm text-[#388E3C]/80 italic">{caption}</p>
        {attribution && (
          <p className="text-xs text-[#388E3C]/50 mt-1">
            Fuente: {attribution}
          </p>
        )}
      </figcaption>
    </figure>
  );
}
