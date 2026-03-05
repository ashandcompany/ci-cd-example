import Image from "next/image";
import styles from "../../styles/Gallery.module.css";

interface GalleryItemProps {
  src: string;
  alt: string;
  caption: string;
}

export default function GalleryItem({ src, alt, caption }: GalleryItemProps) {
  return (
    <div className={styles.item}>
      <div className={styles.imageWrapper}>
        <Image src={src} alt={alt} fill sizes="300px" className={styles.image} />
      </div>
      <p className={styles.caption}>{caption}</p>
    </div>
  );
}
