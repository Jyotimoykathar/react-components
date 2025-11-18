import "../navbar.css";

export default function NavbarWithActions() {
  return (
    <nav className="navbar-container">
      <div className="navbar-logo">MyBrand</div>

      <div className="navbar-menu">
        <a className="navbar-link" href="#">
          Home
        </a>
        <a className="navbar-link" href="#">
          Blog
        </a>
        <a className="navbar-link" href="#">
          Pricing
        </a>
      </div>

      <div className="flex items-center gap-4">
        <button className="navbar-btn">Sign Up</button>
      </div>
    </nav>
  );
}
