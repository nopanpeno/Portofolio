import { useEffect, useState } from "react";
import { info } from "../data/info";

export default function Hero() {
  const [index, setIndex] = useState(0);

  // Ganti peran setiap 2 detik
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % info.roles.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="hero">
      <p className="hello">Halo, saya</p>
      <h1>{info.name}</h1>
      <p className="role">
        Saya seorang <span className="typed">{info.roles[index]}</span>
      </p>
      <div className="hero-buttons">
        <a href="#about" className="btn">Kenali Saya</a>
        <a href="#gallery" className="btn btn-outline">Lihat Karya</a>
      </div>
    </section>
  );
}
