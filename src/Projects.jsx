// src/Projects.jsx
import React, { useEffect, useMemo, useState } from "react";
import { projects } from "./projectData";
import "./Projects.css";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const openModal = (project) => {
    setSelectedProject(project);
    setActiveImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setActiveImageIndex(0);
  };

  // Helper to find current project index
  const selectedProjectIndex = useMemo(() => {
    if (!selectedProject) return -1;
    return projects.findIndex((p) => p.id === selectedProject.id);
  }, [selectedProject]);

  const goNextProject = () => {
    if (!selectedProject) return;
    const i = selectedProjectIndex;
    if (i < 0) return;
    const next = projects[(i + 1) % projects.length];
    setSelectedProject(next);
    setActiveImageIndex(0);
  };

  const goPrevProject = () => {
    if (!selectedProject) return;
    const i = selectedProjectIndex;
    if (i < 0) return;
    const prev = projects[(i - 1 + projects.length) % projects.length];
    setSelectedProject(prev);
    setActiveImageIndex(0);
  };

  // Close on ESC + optional arrow key navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (!selectedProject) return;

      if (e.key === "Escape") {
        closeModal();
      } else if (e.key === "ArrowRight") {
        goNextProject();
      } else if (e.key === "ArrowLeft") {
        goPrevProject();
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedProject, selectedProjectIndex]);

  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => {
          const cover =
            project.images && project.images.length > 0
              ? project.images[0]
              : null;

          return (
            <button
              key={project.id}
              className="project-card"
              onClick={() => openModal(project)}
              type="button"
            >
              {cover && (
                <img
                  src={cover}
                  alt={`${project.title} cover`}
                  className="project-card-image"
                />
              )}

              <div className="project-card-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* ================= MODAL / LIGHTBOX ================= */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          {/* SIDE ARROWS (screen-positioned) */}
          <button
            className="modal-side-nav modal-side-nav-left"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goPrevProject();
            }}
            aria-label="Previous project"
            title="Previous project"
          >
            ←
          </button>

          <button
            className="modal-side-nav modal-side-nav-right"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goNextProject();
            }}
            aria-label="Next project"
            title="Next project"
          >
            →
          </button>

          <div
            className="modal-body"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            {/* HEADER */}
            <div className="modal-header">
              <h2 id="project-modal-title" className="modal-title">
                {selectedProject.title}
              </h2>

              <button
                className="modal-close"
                onClick={closeModal}
                type="button"
                aria-label="Close project modal"
                title="Close"
              >
                X
              </button>
            </div>

            {/* MAIN IMAGE */}
            {selectedProject.images && selectedProject.images.length > 0 && (
              <div className="modal-main-image">
                <img
                  key={`${selectedProject.id}-${activeImageIndex}`}
                  src={selectedProject.images[activeImageIndex]}
                  alt={`${selectedProject.title} main image`}
                />
              </div>
            )}

            {/* SUB IMAGES (click to swap main image) */}
            {selectedProject.images && selectedProject.images.length > 1 && (
              <div className="modal-sub-images">
                {/* show up to 7 total images, excluding index 0 */}
                {selectedProject.images.slice(1, 8).map((img, index) => {
                  const actualIndex = index + 1;
                  const isActive = actualIndex === activeImageIndex;

                  return (
                    <img
                      key={`${selectedProject.id}-thumb-${actualIndex}`}
                      src={img}
                      alt={`${selectedProject.title} thumbnail ${actualIndex}`}
                      className={`modal-sub-image ${
                        isActive ? "active" : ""
                      }`}
                      onClick={() => setActiveImageIndex(actualIndex)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setActiveImageIndex(actualIndex);
                        }
                      }}
                    />
                  );
                })}
              </div>
            )}

            {/* DESCRIPTION */}
            {selectedProject.description && (
              <p className="modal-description">
                {selectedProject.description}
              </p>
            )}

            {/* OPTIONAL META */}
            {(selectedProject.role ||
              selectedProject.client ||
              selectedProject.year ||
              (selectedProject.tools && selectedProject.tools.length > 0)) && (
              <div className="project-meta">
                {selectedProject.role && (
                  <p>
                    <strong>Role:</strong> {selectedProject.role}
                  </p>
                )}
                {selectedProject.client && (
                  <p>
                    <strong>Client:</strong> {selectedProject.client}
                  </p>
                )}
                {selectedProject.year && (
                  <p>
                    <strong>Year:</strong> {selectedProject.year}
                  </p>
                )}
                {selectedProject.tools && selectedProject.tools.length > 0 && (
                  <p>
                    <strong>Tools:</strong>{" "}
                    {selectedProject.tools.join(", ")}
                  </p>
                )}
              </div>
            )}

            {/* OPTIONAL DETAILS LIST */}
            {selectedProject.details &&
              Array.isArray(selectedProject.details) &&
              selectedProject.details.length > 0 && (
                <ul className="project-details-list">
                  {selectedProject.details.map((item, index) => (
                    <li key={`${selectedProject.id}-detail-${index}`}>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
          </div>
        </div>
      )}
    </section>
  );
}
