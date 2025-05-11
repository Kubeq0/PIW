import { useState } from "react";
import { auth } from "../lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";

export default function LoginForm() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
        await signInWithEmailAndPassword(auth, form.email, form.password);
        navigate("/");
    } catch (error) {
        alert("Błąd logowania: " + error.message);
        navigate("/login");
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded mt-1"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Hasło</label>
        <input
          name="password"
          type="password"
          required
          value={form.password}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded mt-1"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
        Zaloguj się
      </button>
    </form>
  );
}
