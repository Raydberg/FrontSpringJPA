import { useNavigate } from "react-router-dom";
import { useBooks } from "../../hooks/useBooks";
import { ButtonDelete } from "../UI/Button/ButtonDelete";
import { ButtonEdit } from "../UI/Button/ButtonEdit";


export const TableBodyBook = () => {
  const { books,hableDelete } = useBooks();
  const navigate = useNavigate();
  const handleEdit = (bookId) => {
    navigate(`/books/edit-book/${bookId}`);
  };
   
   

  
  return (
    <tbody>
      {books.map((book, index) => (
        <tr key={book.id}>
          <td>{index + 1}</td>
          <td>{book.name}</td>
          <td>{book.author}</td>
          <td>{book.pages}</td>
          <td>{book.releaseDate}</td>
          <td>{book.price}</td>
          <td>{book.online ? "Si" : "NO"}</td>
          <td>
            <ButtonEdit onEdit={() => handleEdit(book.id)} />
            <ButtonDelete onDelete={()=>hableDelete(book.id)} />
          </td>
        </tr>
      ))}
    </tbody>
  );
};
