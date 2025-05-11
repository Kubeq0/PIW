import { NavLink } from 'react-router';
import { useAuth } from "../contexts/AuthContext";

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="flex justify-between items-center bg-red-800 text-white p-4 rounded-lg mb-6">
      <h1 className="text-3xl font-bold">
        <NavLink to="/">
          BookPack
        </NavLink>
      </h1>
      <nav className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm">
        {user && (
            <>
              <span className="text-sm text-white font-medium">
                <span className="underline">{user.email}</span>
              </span>
            </>
        )}
        <NavLink to="/cart">
          <button className="bg-white text-red-800 px-4 py-2 rounded hover:bg-gray-100 transition">Koszyk</button>
        </NavLink>
        {user && (
            <>
              <button
                onClick={logout}
                className="bg-white text-red-800 px-4 py-2 rounded hover:bg-gray-100 transition"
              >
                Wyloguj
              </button>
            </>
          )}
        {!user && (
          <NavLink to="/login">
            <button className="bg-white text-red-800 px-4 py-2 rounded hover:bg-gray-100 transition">Zaloguj</button>
          </NavLink>
        )}
      </nav>
    </header>
  );
}
