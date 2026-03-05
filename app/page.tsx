import Link from "next/link";
import Gallery from "./components/Gallery";

export default function Home() {
  return (
    <div>
      <nav>
        <Link href="/about">About</Link>
      </nav>
      <Gallery />
    </div>
  );
}
