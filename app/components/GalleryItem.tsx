import Image from "next/image";

interface GalleryItemProps {
  src: string;
  alt: string;
  caption: string;
  index: number;
}

export default function GalleryItem({ src, alt, caption, index }: GalleryItemProps) {
  return (
    <div 
      className="group relative overflow-hidden rounded-2xl bg-gray-100 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
        <p className="text-white text-xl font-medium tracking-wide">{caption}</p>
      </div>
    </div>
  );
}