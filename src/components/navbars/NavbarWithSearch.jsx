import "../styles/navbar.css";

export default function NavbarWithSearch() {
  return (
    <nav className="navbar-container">
      <div className="navbar-logo">MyBrand</div>

      <div className="hidden md:flex items-center gap-6">
        <a className="navbar-link" href="#">
          Home
        </a>
        <a className="navbar-link" href="#">
          Docs
        </a>
        <a className="navbar-link" href="#">
          Examples
        </a>
      </div>

      <input
        type="text"
        placeholder="Search..."
        className="border px-3 py-1 rounded-lg hidden md:block"
      />
    </nav>
  );
}
