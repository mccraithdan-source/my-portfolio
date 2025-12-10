// src/Clients.jsx
import React, { useMemo, useRef } from "react";
import { clients } from "./clientsData";
import "./Clients.css";

export default function Clients() {
  const viewportRef = useRef(null);

  // Duplicate for a long continuous strip feel
  const loopClients = useMemo(() => [...clients, ...clients], []);

  // Drag state stored in refs (no re-renders)
  const isDown = useRef(false);
  const startX = useRef(0);
  const startScroll = useRef(0);
  const dragged = useRef(false);

  const DRAG_THRESHOLD = 5;

  const scrollByCards = (direction) => {
    const el = viewportRef.current;
    if (!el) return;

    const firstCard = el.querySelector(".client-logo");
    const cardWidth = firstCard
      ? firstCard.getBoundingClientRect().width
      : 200;

    // Keep in sync with CSS gap
    const gap = 10;

    // Scroll ~2 cards per click
    const step = (cardWidth + gap) * 2;

    el.scrollBy({
      left: direction * step,
      behavior: "smooth",
    });
  };

  const onPointerDown = (e) => {
    const el = viewportRef.current;
    if (!el) return;

    isDown.current = true;
    dragged.current = false;

    el.classList.add("is-dragging");

    startX.current = e.clientX;
    startScroll.current = el.scrollLeft;

    el.setPointerCapture?.(e.pointerId);

    // prevent text selection on desktop mouse
    if (e.pointerType === "mouse") {
      e.preventDefault();
    }
  };

  const onPointerMove = (e) => {
    const el = viewportRef.current;
    if (!el || !isDown.current) return;

    const dx = e.clientX - startX.current;

    if (Math.abs(dx) > DRAG_THRESHOLD) {
      dragged.current = true;
    }

    el.scrollLeft = startScroll.current - dx;
  };

  const endDrag = (e) => {
    const el = viewportRef.current;
    if (!el) return;

    isDown.current = false;
    el.classList.remove("is-dragging");

    el.releasePointerCapture?.(e.pointerId);
  };

  return (
    <section id="clients" className="clients-section">
      <h2 className="section-title">Clients I've Worked With</h2>

      <div className="clients-marquee" aria-label="Client logos carousel">
        {/* Arrows */}
        <button
          className="clients-nav clients-nav-left"
          type="button"
          onClick={() => scrollByCards(-1)}
          aria-label="Scroll clients left"
          title="Scroll left"
        >
          ←
        </button>

        <button
          className="clients-nav clients-nav-right"
          type="button"
          onClick={() => scrollByCards(1)}
          aria-label="Scroll clients right"
          title="Scroll right"
        >
          →
        </button>

        {/* Scroll + drag viewport */}
        <div
          className="clients-viewport"
          ref={viewportRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onPointerLeave={endDrag}
        >
          <div className="clients-track">
            {loopClients.map((client, index) => (
              <div
                className="client-item"
                key={`${client.id}-${index}`}
                onClick={(e) => {
                  // prevents accidental click selection when dragging
                  if (dragged.current) e.preventDefault();
                }}
              >
                <div className="client-logo">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    loading="lazy"
                    draggable="false"
                  />
                </div>
                <span className="client-name">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
