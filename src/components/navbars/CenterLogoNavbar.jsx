import "../styles/navbar.css";

export default function CenterLogoNavbar() {
  return (
    <nav className="navbar-container">
      <div className="navbar-menu">
        <a className="navbar-link" href="#">
          Home
        </a>
        <a className="navbar-link" href="#">
          Services
        </a>
      </div>

      <div className="navbar-logo">MyBrand</div>

      <div className="navbar-menu">
        <a className="navbar-link" href="#">
          Portfolio
        </a>
        <a className="navbar-link" href="#">
          Contact
        </a>
      </div>
    </nav>
  );
}
