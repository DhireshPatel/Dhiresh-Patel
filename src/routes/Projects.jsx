import React, { useState } from "react";
import "../style/Projects.css";
import { ExternalLink } from "lucide-react";
import Navbar from "../components/Navbar";

const projects = [
  {
    id: 1,
    title: "Study Space SaaS",
    category: "Next.js",
    image: "/images/librarySaaS.png",
    description:
      "Complete Library management system with admin dashboard, student management and analytics.",
    tech: ["Next.js", "Supabase", "Node.js"],
    github: "https://github.com/DhireshPatel/LibrarySaaS-LocalStorage",
    live: "https://dpworld-two.vercel.app",
    featured: true,
  },
  {
    id: 2,
    title: "Dr. Ketul Kumawat",
    category: "Next.js",
    image: "/images/KetulSir.png",
    description:
      "Modern responsive portfolio with animations and contact form.",
    tech: ["Next.js", "Supabase", "Node.js"],
    github: "https://github.com/DhireshPatel/ketulkumawat",
    live: "https://ketulkumawat.com",
    featured: false,
  },
  {
    id: 3,
    title: "Electrician Service Booking",
    category: "Next.js",
    image: "/images/my-fix.png",
    description:
      "Electrician services booking web page with all electrical services",
    tech: ["Next.js", "Supabase", "Node.js"],
    github: "https://github.com/DhireshPatel/new-service-booking",
    live: "https://new-service-booking.vercel.app/",
    featured: false,
  },
  {
    id: 4,
    title: "Jodhpur academy demo",
    category: "Next.js",
    image: "/images/jodhpur-academy.png",
    description: "Jodhpur academy demo website for showing to Jodhpur academy.",
    tech: ["Next.js", "Supabase", "Node.js"],
    github: "https://github.com/DhireshPatel/Jodhpur-academy-test",
    live: "https://jodhpuracademytest.vercel.app/",
    featured: false,
  },
  {
    id: 5,
    title: "Voltcare",
    category: "Next.js",
    image: "/images/voltcare.png",
    description:
      "Electrician services booking web page with all electrical services",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/DhireshPatel/voltcare",
    live: "https://voltcare-nu.vercel.app/",
    featured: false,
  },
  {
    id: 6,
    title: "easy fix",
    category: "Next.js",
    image: "/images/easyfix.png",
    description:
      "Electrician services booking web page with all electrical services",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/DhireshPatel/Service-Booking",
    live: "https://service-booking-1.vercel.app/",
    featured: false,
  },
  {
    id: 7,
    title: "Apex Classes Demo",
    category: "Next.js",
    image: "/images/apexclasses.png",
    description:
      "Demo Website for Apex Classes & rejected 😎",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/DhireshPatel/Service-Booking",
    live: "https://apex-classes-kudi.vercel.app/",
    featured: false,
  },
  {
    id: 8,
    title: "Rishi Enterprises",
    category: "Next.js",
    image: "/images/rishienterprises.png",
    description:
      "The Store for Rishi Furniture and Electronics",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/DhireshPatel/Rishizone",
    live: "https://rishizone1.vercel.app/",
    featured: false,
  },
];

const filters = ["All", "Next.js", "React", "JavaScript"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const featuredProject = projects.find((p) => p.featured);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      <Navbar />
      <div className="projects-page">
        {/* Hero */}

        <section className="projects-hero">
          <p>MY WORK</p>

          <h1>Projects Built with Modern Technologies</h1>

          <span>
            Some of the projects I've designed and developed using React,
            Next.js and JavaScript.
          </span>
        </section>

        {/* Featured */}

        {featuredProject && (
          <section className="featured-section">
            <h2>Featured Project</h2>

            <div className="featured-card">
              <div className="featured-image">
                <img src={featuredProject.image} alt={featuredProject.title} />
              </div>

              <div className="featured-content">
                <div className="featured-badge">Featured</div>

                <h3>{featuredProject.title}</h3>

                <p>{featuredProject.description}</p>

                <div className="tech">
                  {featuredProject.tech.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <div className="btn-group">
                  <a
                    href={featuredProject.live}
                    className="live-btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>

                  <a
                    href={featuredProject.github}
                    className="github-btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Filter */}

        <section className="filter-section">
          <div className="filter-buttons">
            {filters.map((filter) => (
              <button
                key={filter}
                className={
                  activeFilter === filter ? "filter-btn active" : "filter-btn"
                }
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </section>

        {/* Grid */}

        <section>
          <div className="project-grid">
            {filteredProjects.map((project) => (
              <div className="card" key={project.id}>
                <div className="card-image">
                  <img src={project.image} alt={project.title} />

                  <span className="category">{project.category}</span>
                </div>

                <div className="card-content">
                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="tech">
                    {project.tech.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>

                <div className="card-buttons">
                  {/* <a
                  href={project.live}
                  className="live-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a> */}
                  <a href={project.live} className="live-btn">
                    <ExternalLink size={18} />
                    Live Demo
                  </a>

                  {/* <a
                  href={project.github}
                  className="github-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a> */}
                  <a href={project.github} className="github-btn">
                    {/* <Github size={18} /> */}
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
