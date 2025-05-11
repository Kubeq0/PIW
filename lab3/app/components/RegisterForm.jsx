import { useState } from "react";
import { auth } from "../lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";

export default function RegisterForm() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
        await createUserWithEmailAndPassword(auth, form.email, form.password);
        navigate("/");
    } catch (error) {
        navigate("/login");
        console.error("Błąd rejestracji:", error.message);
        alert("Błąd rejestracji: " + error.message);
    }
  };

  return (
    <form onSubmit={handleRegister} className="space-y-4 mt-4">
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
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
      >
        Zarejestruj się
      </button>
    </form>
  );
}
