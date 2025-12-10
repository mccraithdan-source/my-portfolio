// src/Skills.jsx
import React from "react";
import "./Skills.css";

const skills = [
  "Mechanical Design",
  "SolidWorks",
  "Robotics &\n Automation",
  "Pneumatics &\n Hydraulics",
  "Manufacturing \n Processes",
  "3D Printing &\n Prototyping",
  "Project Engineering",
  "Problem Solving",
  "Technical\n Documentation",
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, i) => (
          <div key={i} className="skill-card">
            {skill.split("\n").map((line, idx) => (
              <span key={idx} className="skill-line">
                {line}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
