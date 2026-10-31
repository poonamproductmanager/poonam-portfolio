import {
  approach,
  certifications,
  education,
  engineeringRoles,
  productRoles,
  profile,
  skillGroups,
  stats,
} from "@/data/profile";

export default function Home() {
  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          <a href="#top" className="brand">
            {profile.name}
          </a>
          <nav aria-label="Main">
            <a href="#about" className="nav-link">About</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#contact" className="nav-cta">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="hero container">
          <p className="eyebrow">{profile.role}</p>
          <h1>{profile.headline}</h1>
          <p className="lede">{profile.intro}</p>
          <div className="badges">
            <span className="badge">{profile.location}</span>
            <span className="badge badge-accent">{profile.clearance}</span>
            <span className="badge">CSPO certified</span>
          </div>
          <div className="actions">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>Get in touch</a>
            <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn ↗
            </a>
          </div>
        </section>

        <section className="container stats" aria-label="At a glance">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </section>

        {/* About */}
        <section id="about" className="section container split">
          <h2 className="section-title">About</h2>
          <div className="prose">
            {profile.about.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </section>

        {/* Approach */}
        <section className="section container split">
          <h2 className="section-title">How I work</h2>
          <div className="cards">
            {approach.map((a, i) => (
              <article key={a.title} className="card">
                <span className="card-num">0{i + 1}</span>
                <h3>{a.title}</h3>
                <p>{a.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="section container split">
          <h2 className="section-title">Experience</h2>
          <div>
            <ol className="timeline">
              {productRoles.map((r) => (
                <li key={r.company + r.period} className="role">
                  <div className="role-head">
                    <h3>{r.company}</h3>
                    <span className="role-period">{r.period}</span>
                  </div>
                  <p className="role-title">{r.title}</p>
                  {r.description && <p className="role-desc">{r.description}</p>}
                </li>
              ))}
            </ol>

            <h3 className="subhead">Engineering &amp; quality assurance, 2004 — 2017</h3>
            <ul className="compact">
              {engineeringRoles.map((r) => (
                <li key={r.company + r.period}>
                  <span>
                    <strong>{r.title}</strong> · {r.company}
                  </span>
                  <span className="muted">{r.period}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="section container split">
          <h2 className="section-title">Skills &amp; tools</h2>
          <div className="skill-groups">
            {skillGroups.map((g) => (
              <div key={g.title}>
                <h3 className="skill-title">{g.title}</h3>
                <ul className="chips">
                  {g.items.map((item) => (
                    <li key={item} className="chip">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Credentials */}
        <section className="section container split">
          <h2 className="section-title">Credentials</h2>
          <div className="creds">
            <div>
              <h3 className="skill-title">Certifications</h3>
              <ul className="plain">
                {certifications.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="skill-title">Education</h3>
              <ul className="plain">
                {education.map((e) => (
                  <li key={e.qualification}>
                    <strong>{e.qualification}</strong>
                    <br />
                    <span className="muted">
                      {e.school} · {e.period}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="contact">
          <div className="container">
            <p className="eyebrow eyebrow-light">Contact</p>
            <h2>Let&rsquo;s talk about your product.</h2>
            <p className="contact-lede">
              Based in London. Happy to connect about product roles, collaborations or a conversation about building products in regulated spaces.
            </p>
            <div className="actions">
              <a className="btn btn-light" href={`mailto:${profile.email}`}>{profile.email}</a>
              <a className="btn btn-outline-light" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer container">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>{profile.location}</span>
      </footer>
    </>
  );
}
