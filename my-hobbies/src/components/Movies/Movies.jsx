
import { hobbies } from "../Hobies/Hobbies";

export const Movies = () =>{

const {movies}= hobbies;

  return (
    <div>
        <h2>Mis peliculas favoritas</h2>
        <ul>

        {movies.map((movie, index)=>(
            <li key= {index}>
       <strong>{movie.name}</strong> ({movie.type}): {movie.genre} - Voto: {movie.vote}
  
            </li>
        ))}
        </ul>
          
    </div>
  )
}
