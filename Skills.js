const Skills = () => {
  const mySkills = [
    { name: "تطوير الواجهات (Frontend)", icon: "fa-code", desc: "بناء مواقع تفاعلية باستخدام React و CSS" },
    { name: "الذكاء الاصطناعي (AI)", icon: "fa-brain", desc: "تطوير نماذج ذكية وحلول برمجية متطورة" },
    { name: "تصميم المواقع (UI/UX)", icon: "fa-pen-nib", desc: "تصميم واجهات مريحة وسهلة الاستخدام" }
  ];

  return (
    <section style={{ 
      padding: "60px 20px", 
      textAlign: "center",
      fontFamily: "'Cairo', sans-serif" 
    }}>
      <h2 style={{ color: "#7b4f3b", marginBottom: "40px", fontSize: "2rem" }}>ماذا أقدم؟</h2>
      
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "25px",
        maxWidth: "900px",
        margin: "0 auto"
      }}>
        {mySkills.map((skill, index) => (
          <div key={index} style={{
            backgroundColor: "rgb(255, 239, 224)",
            padding: "30px 20px",
            borderRadius: "20px",
            border: "1px solid rgba(123, 79, 59, 0.2)",
            transition: "0.3s",
            cursor: "default"
          }} 
          onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-10px)"}
          onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}>
            
            <i className={`fas ${skill.icon}`} style={{ 
              fontSize: "35px", 
              color: "#7b4f3b", 
              marginBottom: "15px" 
            }}></i>
            
            <h3 style={{ fontSize: "1.2rem", color: "#4d3a33", marginBottom: "10px" }}>{skill.name}</h3>
            <p style={{ fontSize: "0.9rem", color: "#6e5041", lineHeight: "1.6" }}>{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
const rootSkills = ReactDOM.createRoot(document.getElementById('Skills'));
rootSkills.render(<Skills />);
