// src/components/navbars/SimpleNavbar.jsx
import "../styles/navbar.css";

import { useState } from "react";
import MobileSideNavbar from "./MobileSideNavbar";

export default function SimpleNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:flex items-center justify-between px-6 py-4 shadow">
        <h1 className="text-xl font-bold">MyBrand</h1>

        <ul className="flex gap-6">
          <li className="cursor-pointer hover:text-blue-600">Home</li>
          <li className="cursor-pointer hover:text-blue-600">About</li>
          <li className="cursor-pointer hover:text-blue-600">Services</li>
          <li className="cursor-pointer hover:text-blue-600">Contact</li>
        </ul>
      </nav>

      {/* Mobile Navbar */}
      <nav className="flex md:hidden items-center justify-between px-4 py-4 shadow">
        <h1 className="text-lg font-bold">MyBrand</h1>
        <button onClick={() => setOpen(true)}>
          <span className="text-2xl">☰</span>
        </button>
      </nav>

      {/* Mobile Side Menu */}
      <MobileSideNavbar open={open} onClose={() => setOpen(false)} />
    </>
  );
}
