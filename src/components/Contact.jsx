import { info } from "../data/info";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <h2>Kontak</h2>
      <p>Mau kerja sama atau ngobrol? Kirim email ke saya.</p>
      <a href={`mailto:${info.email}`} className="btn">Kirim Email</a>
    </section>
  );
}
