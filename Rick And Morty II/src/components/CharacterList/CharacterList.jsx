import React from "react";


export const CharacterList = () => {
  const [characterList, setCharacterList] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      let data = await fetch(`https://rickandmortyapi.com/api/character/`).then(
        (res) => res.json()
      );

      setCharacterList(data.results);
    })();
  }, []);

  return (
    <>
      {characterList.map((character) => {
        if(character.status==="Alive"){
          return (
        <div className = "cartis" key={character.id}>
          <p className="tipitos">Species: {character.species}</p>
          <h2 className="letritas"> {character.name}</h2>
          <img className = "fotis" src={character.image} alt={character.name}/>
          <p className="estado">Status: {character.status}</p>
          <p className="localizacion">Location: {character.location.name}</p>
        </div>)
      }
      return null
    })}
    </>
  );
};

