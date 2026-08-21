import Navbar from "../components/Navbar";
import "../style/AboutPage.css";

const skills = [
  { name: "React JS", level: 60 },
  { name: "JavaScript (ES6+)", level: 60 },
  { name: "HTML5 & CSS3", level: 95 },
  { name: "Tailwind CSS", level: 88 },
  { name: "Git & GitHub", level: 85 },
  { name: "Figma to Code", level: 80 },
];

const journey = [
  {
    year: "January 2026",
    title: "Started Web Development",
    text: "Picked up HTML, CSS and JavaScript, and fell in love with building things for the browser.",
  },
  {
    year: "March 2026",
    title: "Learned React & Modern Tooling",
    text: "Moved into component-based development with React, Git and modern build tools.",
  },
  {
    year: "June 2026",
    title: "First Freelance Projects",
    text: "Started building responsive websites and landing pages for small businesses and startups.",
  },
  {
    year: "Present",
    title: "Frontend Developer",
    text: "Focused on crafting clean, fast and user-friendly interfaces that people enjoy using.",
  },
];

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "25+", label: "Projects Completed" },
  { value: "15+", label: "Happy Clients" },
  { value: "10+", label: "Technologies" },
];

function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="page">
        <div className="side-bar" aria-hidden="true"></div>

        <main>
          {/* Intro Section */}
          <section className="about-hero">
            <div className="about-hero-text">
              <p className="eyebrow">Know Me Better</p>
              <h1 className="about-heading">
                About <span className="accent">Me</span>
              </h1>
              <p className="about-paragraph">
                I'm Dhiresh Patel, a Frontend Developer based in India. I enjoy
                turning ideas into clean, interactive websites and I care about
                the small details that make an interface feel effortless to use.
                When I'm not coding, I'm usually exploring new design trends or
                sharpening my UI/UX instincts.
              </p>
              <p className="about-paragraph">
                I specialize in building responsive, accessible and performant
                web experiences using modern tools like React and Tailwind CSS,
                always aiming to bridge the gap between design and development.
              </p>
              <div className="cta-row">
                <a href="#" className="btn btn-dark">
                  Download CV
                </a>
                <a href="/contact" className="btn btn-light">
                  Get In Touch
                </a>
              </div>
            </div>

            <div className="about-hero-image">
              <div className="photo-ring">
                <img
                  src="/dhiresh.jpeg"
                  alt="Dhiresh Patel"
                />
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="stats-section">
            {stats.map((stat) => (
              <div className="stat-card" key={stat.label}>
                <h3 className="stat-value">{stat.value}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </section>

          {/* Skills Section */}
          <section className="skills-section">
            <p className="eyebrow eyebrow-center">What I Work With</p>
            <h2 className="section-heading">My Skills</h2>

            <div className="skills-grid">
              {skills.map((skill) => (
                <div className="skill-card" key={skill.name}>
                  <div className="skill-top">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                  <div className="skill-bar-track">
                    <div
                      className="skill-bar-fill"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Journey / Timeline Section */}
          <section className="journey-section">
            <p className="eyebrow eyebrow-center">How I Got Here</p>
            <h2 className="section-heading">My Journey</h2>

            <div className="timeline">
              {journey.map((step, index) => (
                <div className="timeline-item" key={step.title}>
                  <div className="timeline-marker">
                    <span className="timeline-dot"></span>
                    {index !== journey.length - 1 && (
                      <span className="timeline-line"></span>
                    )}
                  </div>
                  <div className="timeline-content">
                    <span className="timeline-year">{step.year}</span>
                    <h4 className="timeline-title">{step.title}</h4>
                    <p className="timeline-text">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Footer Section */}
          <section className="cta-section">
            <h2 className="cta-heading">
              Let's build something <span className="accent">great</span>{" "}
              together.
            </h2>
            <p className="cta-subtext">
              Have a project in mind or just want to say hi? My inbox is always
              open.
            </p>
            <div className="cta-row cta-row-center">
              <a href="/contact" className="btn btn-dark">
                Get In Touch
              </a>
              <a href="/project" className="btn btn-light">
                Browse Projects
              </a>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default AboutPage;
