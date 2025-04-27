import { Link } from 'react-router';

export default function Filters({ filters, onChange }) {
  return (
    <section className="bg-white p-6 rounded-lg shadow mb-8">
      <h2 className="text-2xl font-bold mb-4">Wyszukiwanie pozycji</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <input type="text" name="title" placeholder="Tytuł" value={filters.title} onChange={onChange} className="border p-2 rounded" />
        <input type="text" name="author" placeholder="Autor" value={filters.author} onChange={onChange} className="border p-2 rounded" />
        <input type="text" name="keyword" placeholder="Słowo w opisie" value={filters.keyword} onChange={onChange} className="border p-2 rounded" />
        <input type="number" name="pages" placeholder="Ilość stron min" value={filters.pages} onChange={onChange} className="border p-2 rounded" />
        <select name="cover" value={filters.cover} onChange={onChange} className="border p-2 rounded">
          <option value="">Wszystkie okładki</option>
          <option value="twarda">Twarda</option>
          <option value="miękka">Miękka</option>
        </select>
        <input type="number" name="price" placeholder="Cena max" value={filters.price} onChange={onChange} className="border p-2 rounded" />
        <Link to="/new" className="md:col-span-2 lg:col-span-1">
          <button type="button" className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition">Dodaj nową książkę</button>
        </Link>
      </form>
    </section>
  );
}
