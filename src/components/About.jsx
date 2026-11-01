import { info } from "../data/info";

export default function About() {
  return (
    <section id="about" className="section about">
      <h2>Tentang Saya</h2>
      <div className="about-wrap">
        <img src="/images/profil.jpg" alt={info.name} className="profile-img" />
        <div>
          <p>{info.tagline}</p>
          <p>Tinggal di {info.location}.</p>
          <p>{info.education}.</p>
          <h3>Riwayat Pendidikan</h3>
          <ul className="timeline">
            {info.history.map((h) => (
              <li key={h.year}>
                <strong>{h.year}</strong> · {h.place}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
