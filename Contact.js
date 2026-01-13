const inputStyle = {
  padding: "12px 15px",
  borderRadius: "12px",
  border: "1px solid #ffe1d6",
  backgroundColor: "#fffaf5",
  outline: "none",
  fontFamily: "'Cairo', sans-serif",
  width: "100%", // لضمان ملء المساحة
  boxSizing: "border-box" // لضمان عدم خروج المدخلات عن الإطار
};

const ContactComponent = () => {
  return (
    <section style={{ padding: "60px 20px", maxWidth: "600px", margin: "0 auto", direction: "rtl" }}>
      <div style={{
        backgroundColor: "white",
        padding: "40px",
        borderRadius: "30px",
        boxShadow: "0 15px 35px rgba(0,0,0,0.05)",
        border: "1px solid #ffe1d6"
      }}>
        <h2 style={{ color: "#7b4f3b", marginBottom: "20px", textAlign: "center", fontFamily: "'Cairo', sans-serif" }}>أرسل لي رسالة</h2>
        
        <form style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <input type="text" placeholder="الاسم الكريم" style={inputStyle} />
          <input type="email" placeholder="بريدك الإلكتروني" style={inputStyle} />
          <textarea placeholder="كيف يمكنني مساعدتك؟" rows="4" style={inputStyle}></textarea>
          
          <button type="submit" style={{
            padding: "12px",
            backgroundColor: "#7b4f3b",
            color: "white",
            border: "none",
            borderRadius: "15px",
            fontSize: "1.1rem",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "0.3s",
            fontFamily: "'Cairo', sans-serif"
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = "#4d3a33"}
          onMouseOut={(e) => e.target.style.backgroundColor = "#7b4f3b"}>
            إرسال الطلب
          </button>
        </form>
      </div>
    </section>
  );
};

// التصحيح هنا: استخدام rootContact بدلاً من rootSkills واستخدام اسم مكون مختلف عن اسم الـ root
const rootContact = ReactDOM.createRoot(document.getElementById('ContactForm'));
rootContact.render(<ContactComponent />);