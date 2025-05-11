import { useEffect, useState } from "react";
import { editBook } from "../hooks/useBooks";
import { db } from "../lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate, useParams } from "react-router";

export default function EditBook() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState(null);

  useEffect(() => {
    const load = async () => {
      const snap = await getDoc(doc(db, "books", id));
      if (snap.exists()) {
        setForm(snap.data());
      }
    };
    load();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await editBook(id, { ...form, pages: +form.pages, price: +form.price });
    navigate("/");
  };

  if (!form) return <p>Ładowanie...</p>;

  return (
    <section className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Edytuj książkę</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="title" value={form.title} onChange={handleChange} className="border p-2 rounded" required />
        <input name="author" value={form.author} onChange={handleChange} className="border p-2 rounded" required />
        <input name="pages" type="number" value={form.pages} onChange={handleChange} className="border p-2 rounded" required />
        <select name="cover" value={form.cover} onChange={handleChange} className="border p-2 rounded" required>
          <option value="twarda">Twarda</option>
          <option value="miękka">Miękka</option>
        </select>
        <input name="price" type="number" step="0.01" value={form.price} onChange={handleChange} className="border p-2 rounded" required />
        <textarea name="desc" value={form.desc} onChange={handleChange} className="border p-2 rounded md:col-span-2" />
        <button className="bg-blue-500 text-white py-2 rounded md:col-span-2">Zapisz zmiany</button>
      </form>
    </section>
  );
}
