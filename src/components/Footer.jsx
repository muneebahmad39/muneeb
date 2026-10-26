import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-col">
          <h3>NovaSite</h3>
          <p>
            Orange themed custom layout with a simple navbar, login button, and
            a three-column footer — no extra packages.
          </p>
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-col">
          <h3>Get In Touch</h3>
          <p>Email: hello@novasite.com</p>
          <p>Phone: +92 300 0000000</p>
          <a href="#login" className="footer-login">
            Login
          </a>
        </div>
      </div>
      <p className="footer-copy">© 2026 NovaSite. All rights reserved.</p>
    </footer>
  );
}
