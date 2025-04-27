import { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

export default function BookItem({ book }) {
  const { deleteBook } = useContext(BookContext);

  return (
    <div className="border p-3 rounded-lg shadow-sm hover:shadow-md bg-white flex flex-col gap-1 transition text-sm h-full">
      <h3 className="text-lg font-semibold">{book.title}</h3>
      <p><strong>Autor:</strong> {book.author}</p>
      <p><strong>Stron:</strong> {book.pages}</p>
      <p><strong>Okładka:</strong> {book.cover}</p>
      <p><strong>Cena:</strong> {book.price} zł</p>
      <div className="flex gap-2 mt-auto pt-2">
        <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 text-xs">Edytuj</button>
        <button onClick={() => deleteBook(book.id)} className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 text-xs">Usuń</button>
      </div>
    </div>
  );
}
