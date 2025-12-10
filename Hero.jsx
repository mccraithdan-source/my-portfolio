import profilePic from "./assets/profile.jpg";

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <img src={profilePic} alt="Dan McGrath" className="hero-img" />

        <h1>Hello, I'm Dan</h1>

        <p>Mechanical Design Engineer specialising in automation & robotics.</p>

        <div className="hero-btn-row">
          <a
            href="/Daniel_Mc_Grath_CV_2025.pdf"
            download="Daniel_Mc_Grath_CV_2025.pdf"
            className="hero-btn"
          >
            Download CV ↓
          </a>

          <a
  href="https://drive.google.com/file/d/1qJd8b6RujnIMIkHmAOqmacFKMCQtO4Kk/view?usp=drive_link"
  target="_blank"
  rel="noopener noreferrer"
  className="hero-btn hero-btn-secondary"
>
  View Portfolio ↓
</a>

        </div>
      </div>
    </section>
  );
}
