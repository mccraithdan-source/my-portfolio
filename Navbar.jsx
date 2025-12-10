export default function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px 40px",
      background: "#f5f5f5",
      borderBottom: "1px solid #ddd"
    }}>
      <h2 style={{ margin: 0 }}>Dan McGrath</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
