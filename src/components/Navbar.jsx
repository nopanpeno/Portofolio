import { useState } from "react";
import { info } from "../data/info";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <span className="logo">{info.name}</span>
      <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Buka menu">
        ☰
      </button>
      <ul className={open ? "nav-links open" : "nav-links"} onClick={() => setOpen(false)}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#contact">Kontak</a></li>
      </ul>
    </nav>
  );
}
