import axios from "axios";

export const fillAllBook = async () => {
  const { data } = await axios.get("http://localhost:8080/api/books");
  return data;
};
export const deleteBook = async(id)=>{
  return axios.delete(`http://localhost:8080/api/books/${id}`)
}