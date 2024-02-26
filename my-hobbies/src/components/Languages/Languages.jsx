import { hobbies } from "../Hobies/Hobbies"

export const Languages = () => {
    const {languages} = hobbies;

  return (
    <div>   
                <h2> Language </h2>
               <p>Language: {languages.language}</p>
              <p> Wr level: {languages.wrlevel}</p>
              <p> Sp level: {languages.splevel}</p>
    </div>
  )
}