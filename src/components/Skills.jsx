import { useState } from "react";
import { skills } from "../data/info";

export default function Skills() {
  const [active, setActive] = useState(null);

  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <div className="grid">
        {skills.map((s) => (
          <div
            key={s.id}
            className={`card ${active === s.id ? "active" : ""}`}
            onMouseEnter={() => setActive(s.id)}
            onMouseLeave={() => setActive(null)}
          >
            <h3>{s.title}</h3>
            <p className="tool">{s.tool}</p>
            <div className="bar">
              <div className="bar-fill" style={{ width: `${s.percent}%` }} />
            </div>
            <p>{s.level} · {s.percent}%</p>
          </div>
        ))}
      </div>
    </section>
  );
}
