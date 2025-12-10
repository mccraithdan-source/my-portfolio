export default function Contact() {
  return (
    <section
      id="contact"
      className="section-light"
      style={{ padding: "60px 40px" }}
    >
      <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>Contact</h2>

      <p style={{ fontSize: "20px", marginBottom: "20px" }}>
        Feel free to get in touch with me using the links below:
      </p>

      <div style={{ fontSize: "20px", lineHeight: "1.8" }}>
        <p>
          📧 Email:{" "}
          <a href="mailto:mccraithdan@gmail.com">mccraithdan@gmail.com</a>
        </p>

        <p>
          🔗 LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/daniel-mc-grath-970a11174"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.linkedin.com/in/daniel-mc-grath-970a11174
          </a>
        </p>

        <p>📍 Location: Galway / Sydney</p>
      </div>
    </section>
  );
}
