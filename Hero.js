const Hero = () => (
  <section className="hero">
    <div className="hero-container">
      <img
        src="images/Abdelrahman.jpg"
        alt="Profile"
        className="hero-image"
      />
      <div className="hero-text">
        <p className="subtitle">الملف الشخصي</p>
        <h1 className="name">عبدالرحمن اسلام</h1>
        <p className="role">مبرمج و مصمم المواقع</p>
        <p className="description">
          تصميم مواقع احترافية بدقة وجودة عالية وإضافة خدمات كثيرة ومتنوعة للمواقع
        </p>
        <div className="social-links">
          <a className="instagram" href="https://www.instagram.com/abdo8364736/" target="_blank"><i className="fa-brands fa-instagram" /></a>
          <a className="youtube" href="https://www.youtube.com/@Coder-v7f" target="_blank"><i className="fa-brands fa-youtube" /></a>
          <a className="threads" href="https://www.threads.com/@abdo8364736/" target="_blank"><i className="fa-brands fa-threads" /></a>
          <a className="linkedin" href="https://www.linkedin.com/in/Abdelrahman23421" target="_blank"><i className="fa-brands fa-linkedin" /></a>
          <a className="tiktok" href="https://www.tiktok.com/@abdelrahman23420" target="_blank"><i className="fa-brands fa-tiktok" /></a>
          <a className="github" href="https://github.com/abdelrahman4532/" target="_blank"><i className="fa-brands fa-github" /></a>
        </div>
      </div>
    </div>
  </section>
);

const rootHero = ReactDOM.createRoot(document.getElementById('Hero'));
rootHero.render(<Hero />);