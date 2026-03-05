import GalleryItem from "./GalleryItem";
import styles from "../../styles/Gallery.module.css";

const photos = [
  { src: "https://picsum.photos/seed/forest/600/400", alt: "Forest", caption: "Forest" },
  { src: "https://picsum.photos/seed/ocean/600/400", alt: "Ocean", caption: "Ocean" },
  { src: "https://picsum.photos/seed/mountain/600/400", alt: "Mountain", caption: "Mountain" },
  { src: "https://picsum.photos/seed/city/600/400", alt: "City", caption: "City" },
  { src: "https://picsum.photos/seed/desert/600/400", alt: "Desert", caption: "Desert" },
  { src: "https://picsum.photos/seed/river/600/400", alt: "River", caption: "River" },
];

export default function Gallery() {
  return (
    <section className={styles.gallery}>
      <h2 className={styles.title}>Photo Gallery</h2>
      <div className={styles.grid}>
        {photos.map((photo) => (
          <GalleryItem key={photo.src} {...photo} />
        ))}
      </div>
    </section>
  );
}
