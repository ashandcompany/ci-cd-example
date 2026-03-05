import Image from "next/image";

interface GalleryItemProps {
  src: string;
  alt: string;
  span: string; // Pour gérer la taille dans la grille
  index: number;
}

export default function GalleryItem({ src, alt, span, index }: GalleryItemProps) {
  return (
    <div 
      className={`${span} group relative overflow-hidden bg-black`}
    >
      <div className="relative w-full h-full">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover transition-all duration-700 group-hover:scale-105"
        />
        {/* Overlay rouge subtil au survol */}
        <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/20 transition-colors duration-300" />
      </div>
    </div>
  );
}