import { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';
import BookItem from '../components/BookItem';
import Filters from '../components/Filters';

export default function Index() {
  const { books } = useContext(BookContext);
  const [filters, setFilters] = useState({ title: '', author: '', keyword: '', cover: '', price: '', pages: '' });

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
