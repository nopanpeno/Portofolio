import { info } from "../data/info";

export default function Footer() {
  return (
    <footer className="footer">
      <p>{info.name} · {info.tagline}</p>
      <p>© {new Date().getFullYear()} {info.name}. Semua hak dilindungi.</p>
    </footer>
  );
}
