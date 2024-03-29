
import { hobbies } from "../Hobies/Hobbies"

export const Read = () => {
    const {read}= hobbies
  return (
    <>
    <div>
        <h2>{read.title}</h2>
        <p>Author Name: {read.authorName}</p>
        <p>Author Surname: {read.authorSurname}</p>
        <p>Genre: {read.genre}</p>
        <p>Date Of Publication: {read.dateOfPublication}</p>
        <p>Author Birth Date: {read.authorBirthDate}</p>
        <h2>Mis libros:</h2>
        {read.bookImage && <img src={read.bookImage} alt="Libro"/>}
 
    </div>
    <ul>
    {read.otherBooks.map((book, index)=>(
        <li key={index}>{book.info}</li>
    ))}
    </ul>

    </>
  )
}
