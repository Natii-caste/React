
import { hobbies } from "../Hobies/Hobbies";

export const SongsHeard = () => {
    const {songsHeard }=hobbies;
  return (
    <div>
        <h2>Mis canciones favoritas</h2>
        <ul>
            {songsHeard.map((song, index)=>(
                <li key={index}>
                  
                {song}
                </li>
            ))}
        </ul>
        
        </div>
  )
}

