import { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { BookContext } from '../contexts/BookContext';
import { useAuth } from "../contexts/AuthContext";
import { useBooks } from "../hooks/useBooks";
import BookItem from '../components/BookItem';
import Filters from '../components/Filters';

export default function Index() {
  const { user } = useAuth();
  // const { books } = useContext(BookContext);

  const [filters, setFilters] = useState({
    title: "",
    author: "",
    keyword: "",
    cover: "",
    price: "",
    pages: "",
  });

  const [onlyMine, setOnlyMine] = useState(false);
  const books = useBooks(onlyMine, user?.uid);

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredBooks = books.filter(book => {
    return (
      (!filters.title || book.title.toLowerCase().includes(filters.title.toLowerCase())) &&
      (!filters.author || book.author.toLowerCase().includes(filters.author.toLowerCase())) &&
      (!filters.keyword || book.desc.toLowerCase().includes(filters.keyword.toLowerCase())) &&
      (!filters.cover || book.cover === filters.cover) &&
      (!filters.price || book.price <= parseFloat(filters.price)) &&
      (!filters.pages || book.pages >= parseInt(filters.pages))
    );
  });

  return (
    <>
      <Filters filters={filters} onChange={handleChange} />
      {user && (
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setOnlyMine((prev) => !prev)}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            {onlyMine ? "Pokaż wszystkie" : "Pokaż MOJE"}
          </button>
        </div>
      )}
      <section className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Lista książek</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredBooks.map(book => (
            <BookItem key={book.id} book={book} />
          ))}
        </div>
      </section>
    </>
  );
}
