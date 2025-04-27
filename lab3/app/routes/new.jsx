import { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';
import { useNavigate } from 'react-router';

export default function New() {
  const { addBook } = useContext(BookContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: '', author: '', pages: '', cover: '', price: '', desc: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(form);
    navigate('/');
  };

  return (
    <section className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Dodaj nową pozycję</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Tytuł" value={form.title} onChange={handleChange} required className="border p-2 rounded" />
        <input type="text" name="author" placeholder="Autor" value={form.author} onChange={handleChange} required className="border p-2 rounded" />
        <input type="number" name="pages" placeholder="Ilość stron" value={form.pages} onChange={handleChange} required className="border p-2 rounded" />
        <select name="cover" value={form.cover} onChange={handleChange} required className="border p-2 rounded">
          <option value="">Wybierz okładkę</option>
          <option value="twarda">Twarda</option>
          <option value="miękka">Miękka</option>
        </select>
        <input type="number" name="price" placeholder="Cena" step="0.01" value={form.price} onChange={handleChange} required className="border p-2 rounded" />
        <textarea name="desc" placeholder="Opis" value={form.desc} onChange={handleChange} className="border p-2 rounded md:col-span-2"></textarea>
        <button type="submit" className="bg-green-500 text-white py-2 rounded hover:bg-green-600 transition md:col-span-2">
          Dodaj książkę
        </button>
      </form>
    </section>
  );
}
