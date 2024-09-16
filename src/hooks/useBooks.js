import { useEffect, useState } from "react";
import { deleteBook, fillAllBook } from "../service/books.service";

export const useBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const data = await fillAllBook();
        setBooks(data);
      } catch (error) {
        console.error("Error en traer los libros", error);
      }
    };
    getBooks();
  }, []);

    const hableDelete = async(bookId)=>{
        await deleteBook(bookId)
        setBooks((prevBook)=> prevBook.filter((books)=>books.id !== bookId))
        
    }

  return {
    books,hableDelete
  };
};
