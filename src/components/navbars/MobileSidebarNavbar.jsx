// src/components/navbars/MobileSideNavbar.jsx
import "../styles/navbar.css";

export default function MobileSideNavbar({ open, onClose }) {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-white shadow transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="p-4 flex justify-between items-center border-b">
        <h2 className="text-lg font-bold">Menu</h2>
        <button onClick={onClose} className="text-xl">
          ×
        </button>
      </div>

      <ul className="flex flex-col gap-4 p-4 text-lg">
        <li onClick={onClose} className="cursor-pointer hover:text-blue-600">
          Home
        </li>
        <li onClick={onClose} className="cursor-pointer hover:text-blue-600">
          About
        </li>
        <li onClick={onClose} className="cursor-pointer hover:text-blue-600">
          Services
        </li>
        <li onClick={onClose} className="cursor-pointer hover:text-blue-600">
          Contact
        </li>
      </ul>
    </div>
  );
}
