import React from "react";
import "../style/Skills.css";

const skills = [
  {
    title: "Web Design",
    items: [
      "UI/UX Design",
      "Responsive Design",
      "Wireframing",
      "User Research",
    ],
  },
  {
    title: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "ReactJS", "NextJS"],
  },
  {
    title: "Backend",
    items: ["NodeJS", "ExpressJS", "MongoDB", "Supabase", "Vercel"],
  },
  {
    title: "Soft Skills",
    items: ["Communication", "Teamwork", "Problem Solving", "Leadership"],
  },
];

const Skills = () => {
  return (
    <section className="skills">
      <h1 className="skillsTitle">
        Skills<span>.</span>
      </h1>

      <div className="skillsGrid">
        {skills.map((category, index) => (
          <div className="skillCard" key={index}>
            <h2>{category.title}</h2>

            <ul>
              {category.items.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
