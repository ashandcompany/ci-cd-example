import GalleryItem from "./GalleryItem";

const photos = [
  { src: "https://i.pinimg.com/736x/52/09/02/520902ce2b48c46c081d989a50ef9422.jpg", alt: "Forest", caption: "Forest" },
  { src: "https://i.pinimg.com/1200x/75/6b/98/756b987de2396919e055d4ee91892740.jpg", alt: "Ocean", caption: "Ocean" },
  { src: "https://i.pinimg.com/736x/0e/b8/02/0eb80243ef355c91e7ff0682f5792ae4.jpg", alt: "Mountain", caption: "Mountain" },
  { src: "https://i.pinimg.com/1200x/18/ef/76/18ef768e0a659658bc20c27fb596090f.jpg", alt: "City", caption: "City" },
  { src: "https://i.pinimg.com/1200x/7a/8d/7c/7a8d7c33a331162a378dd2308662869e.jpg", alt: "Desert", caption: "Desert" },
  { src: "https://i.pinimg.com/736x/45/f8/a6/45f8a63ce5911308a59dcd95871cc7d3.jpg", alt: "River", caption: "River" },
];

export default function Gallery() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-12 tracking-tight">
        Photo Gallery
        <span className="block w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mt-4"></span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-max">
        {photos.map((photo, index) => (
          <GalleryItem key={photo.src} {...photo} index={index} />
        ))}
      </div>
    </section>
  );
}