function Contact() {
  return (
    <div className="main contact-container">
      <h1 className="contact-title">Get in Touch</h1>

      <div className="contact-card">
        <p className="contact-item">
          <span className="contact-icon">📧</span>
          yourname@email.com
        </p>

        <p className="contact-item">
          <span className="contact-icon">🐙</span>
          https://github.com/yourusername
        </p>

        <p className="contact-item">
          <span className="contact-icon">💼</span>
          https://linkedin.com/in/profile
        </p>
      </div>
    </div>
  );
}

export default Contact;
