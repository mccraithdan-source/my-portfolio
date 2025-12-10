export default function Footer() {
  return (
    <footer
      style={{
        background: "#f5f5f5",
        padding: "30px 20px",
        textAlign: "center",
        marginTop: "60px",
        borderTop: "1px solid #ddd",
      }}
    >
      <h3 style={{ marginBottom: "10px" }}>Dan McGrath</h3>

      <p style={{ margin: "5px 0" }}>
        <a
          href="mailto:mccraithdan@gmail.com"
          style={{ color: "#007bff", textDecoration: "none" }}
        >
          mccraithdan@gmail.com
        </a>
      </p>

      <p style={{ margin: "5px 0" }}>
        <a
          href="https://www.linkedin.com/in/daniel-mc-grath-970a11174"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#007bff", textDecoration: "none" }}
        >
          www.linkedin.com/in/daniel-mc-grath-970a11174
        </a>
      </p>

      <p style={{ marginTop: "15px", color: "#555" }}>
        © {new Date().getFullYear()} Dan McGrath. All rights reserved.
      </p>
    </footer>
  );
}
