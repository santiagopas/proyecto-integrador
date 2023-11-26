import '../styles/components/Footer.css';

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer-text">© SP - {date} todos los derechos reservados</p>
    </footer>
  );
};

export default Footer;
