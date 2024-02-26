
import { hobbies } from "../Hobies/Hobbies";

export const Sports = () => {

    const {sports} = hobbies;

  return (
    <div>
        <h2>Deportes</h2>
        <ul>
    {sports.map((sport, index)=>(
        <li key={index}>

       <strong>Name:</strong>{sport.name}<br />

       <strong>indoor:</strong>{sport.indoor ? 'Yes': 'No'}<br />

       <strong>favorite Team:</strong>{sport.favoriteTeam}<br />
       <br />
        </li>
    ))}

        </ul>
    </div>
  )
}

