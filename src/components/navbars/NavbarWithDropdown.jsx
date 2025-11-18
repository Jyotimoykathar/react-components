import { useState } from "react";
import "../navbar.css";

export default function NavbarWithDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar-container">
      <div className="navbar-logo">MyBrand</div>

      <div className="navbar-menu">
        <a className="navbar-link" href="#">
          Home
        </a>

        <div className="relative">
          <button className="navbar-link" onClick={() => setOpen(!open)}>
            Services ▼
          </button>

          {open && (
            <div className="absolute top-8 left-0 bg-white shadow-md p-4 flex flex-col gap-2 w-40">
              <a className="navbar-link" href="#">
                Design
              </a>
              <a className="navbar-link" href="#">
                Development
              </a>
              <a className="navbar-link" href="#">
                Marketing
              </a>
            </div>
          )}
        </div>

        <a className="navbar-link" href="#">
          Contact
        </a>
      </div>
    </nav>
  );
}
