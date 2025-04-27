import { NavLink } from 'react-router';

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-red-800 text-white p-4 rounded-lg mb-6">
      <h1 className="text-3xl font-bold">
        <NavLink to="/">
          BookPack
        </NavLink>
      </h1>
      <nav className="flex gap-4">
        <NavLink to="/login">
          <button className="bg-white text-red-800 px-4 py-2 rounded hover:bg-gray-100 transition">Zaloguj</button>
        </NavLink>
        <NavLink to="/cart">
          <button className="bg-white text-red-800 px-4 py-2 rounded hover:bg-gray-100 transition">Koszyk</button>
        </NavLink>
      </nav>
    </header>
  );
}
