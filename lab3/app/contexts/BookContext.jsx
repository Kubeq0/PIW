import { createContext, useState } from 'react';

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([
    { id: 1, title: "Pan Tadeusz", author: "Adam Mickiewicz", pages: 340, cover: "twarda", price: 39.99, desc: "Opis Pan Tadeusz" },
    { id: 2, title: "Lalka", author: "Bolesław Prus", pages: 680, cover: "miękka", price: 29.90, desc: "Opis Lalka" }
  ]);

  const addBook = (book) => {
    setBooks(prev => [...prev, { ...book, id: Date.now() }]);
  };

  const deleteBook = (id) => {
    setBooks(prev => prev.filter(book => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, deleteBook }}>
      {children}
    </BookContext.Provider>
  );
};
