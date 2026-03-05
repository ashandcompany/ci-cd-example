import GalleryItem from "./GalleryItem";
import TextBlock from "./TextBlock";

const galleryContent = [
  // Images
  { type: "image", src: "https://i.pinimg.com/736x/52/09/02/520902ce2b48c46c081d989a50ef9422.jpg", alt: "Forest", span: "row-span-2 col-span-2" },
  { type: "image", src: "https://i.pinimg.com/1200x/75/6b/98/756b987de2396919e055d4ee91892740.jpg", alt: "Ocean", span: "col-span-1 row-span-1" },
  // Bloc de texte (remplace une image)
  { type: "text", content: "Matt Murdock, l'avocat aveugle de Hell's Kitchen, utilise ses pouvoirs surhumains pour combattre le crime.", span: "col-span-1 row-span-1" },
  { type: "image", src: "https://i.pinimg.com/736x/0e/b8/02/0eb80243ef355c91e7ff0682f5792ae4.jpg", alt: "Mountain", span: "col-span-1 row-span-2" },
  { type: "image", src: "https://i.pinimg.com/1200x/18/ef/76/18ef768e0a659658bc20c27fb596090f.jpg", alt: "City", span: "col-span-1 row-span-1" },
  // Grand bloc de texte (remplace 2 images)
  { type: "text", content: "Daredevil protège les intérêts de la justice avec son redoutable bâton et ses sens aiguisés développés par sa cécité. Son radar surhumain le rend pratiquement invulnérable dans les combats contre les forces obscures de la mafia.", span: "col-span-2 row-span-1" },
  { type: "image", src: "https://i.pinimg.com/1200x/7a/8d/7c/7a8d7c33a331162a378dd2308662869e.jpg", alt: "Desert", span: "col-span-2 row-span-1" },
  { type: "image", src: "https://i.pinimg.com/736x/45/f8/a6/45f8a63ce5911308a59dcd95871cc7d3.jpg", alt: "River", span: "col-span-1 row-span-1" },
  // Petit bloc de texte vertical
  { type: "text", content: "Le radar de Daredevil lui permet de voir le monde d'une manière complètement différente et transcendantale.", span: "col-span-1 row-span-2" },
];

export default function Gallery() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h2 className="text-7xl font-black text-black tracking-tighter leading-none">
          DAREDEVIL
        </h2>
        <p className="text-red-700 font-medium text-sm tracking-widest mt-2">
          GALLERY · 004
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-3 md:gap-4">
        {galleryContent.map((item, index) => (
          item.type === "image" ? (
            <GalleryItem 
              key={`img-${index}`} 
              src={item.src} 
              alt={item.alt} 
              span={item.span} 
              index={index} 
            />
          ) : (
            <TextBlock 
              key={`text-${index}`}
              content={item.content}
              span={item.span}
              index={index}
            />
          )
        ))}
      </div>
    </section>
  );
}