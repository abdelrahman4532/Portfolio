const Navbar = () => (
  <nav>
    <div
      className="navbar"
      style={{
        width: 900,
        height: 60,
        margin: "30px auto",
        backgroundColor: "rgb(255, 239, 224)",
        display: "flex",
        flexDirection: "row-reverse",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 30px",
        border: "2px solid rgb(0, 0, 0)",
        borderRadius: 100,
        boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
        fontFamily: "sans-serif"
      }}
    >
      <button className="boton-elegante" style={{ /* ستايل الزر */ }}>
        ابدأ مشروعك
      </button>
      <div className="links" style={{ display: "flex", gap: 25, alignItems: "center" }}>
        <h3 style={{ color: "#333", fontSize: "1rem", margin: 0 }}>الخدمات</h3>
        <h3 style={{ color: "#333", fontSize: "1rem", margin: 0 }}>المشاريع</h3>
        <h3 style={{ color: "#333", fontSize: "1rem", margin: 0 }}>التقنيات</h3>
        <h3 style={{ color: "#333", fontSize: "1rem", margin: 0 }}>تواصل معنا</h3>
      </div>
    </div>
  </nav>
);

const rootNav = ReactDOM.createRoot(document.getElementById('Navbar'));
rootNav.render(<Navbar />);