import { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where
} from "firebase/firestore";
import { db } from "../lib/firebase";

export const useBooks = (userOnly = false, uid = null) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const ref = collection(db, "books");
    const q = userOnly && uid ? query(ref, where("owner", "==", uid)) : ref;

    const unsub = onSnapshot(q, (snap) => {
      setBooks(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsub();
  }, [userOnly, uid]);

  return books;
};

export const addBook = (book) =>
  addDoc(collection(db, "books"), book);

export const editBook = (id, data) =>
  updateDoc(doc(db, "books", id), data);

export const removeBook = (id) =>
  deleteDoc(doc(db, "books", id));
