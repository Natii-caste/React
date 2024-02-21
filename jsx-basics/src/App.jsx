//import { useState } from 'react'
import './App.css'
import On from './components/button';


const App = () => {
const tiempo = (hora) => {
  if(hora < 12){
    return "buenos dias"
  }else if(hora >= 13 && hora <= 19) {
    return "buenas tardes"
  } else {
    return "buenas noches"
  }
}


const comidas = ["arroz", "pollo", "guisantes", "gambas", "pulpo"]



  return (
    <>
      <h1>Hola: {tiempo(12)}</h1>
      {comidas.map((comida, index) =>(<p key={index}>{comida}</p>)
      
    )}
    <On/>
    </>
  )

}


export default App
