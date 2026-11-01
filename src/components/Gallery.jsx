import { gallery } from "../data/gallery";
import { info } from "../data/info";

export default function Gallery() {
  return (
    <section id="gallery" className="section">
      <h2>Gallery</h2>
      <div className="grid">
        {gallery.map((g) => (
          <figure key={g.id} className="card gallery-item">
            <img src={g.image} alt={g.title} />
            <figcaption>{g.title}</figcaption>
          </figure>
        ))}
      </div>
      <div className="showcase">
        <h3>Video Showcase</h3>
        <p>Contoh karya editing video menggunakan Alight Motion.</p>
        <a href={info.youtube} className="btn" target="_blank" rel="noreferrer">
          Lihat Kanal YouTube
        </a>
      </div>
    </section>
  );
}
