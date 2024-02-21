//*import { useState } from 'react'

import './App.css'
import { Image, Title } from './components';
import { Parrafo } from './components/Paragraph/Paragraph';
import { Subtitle } from './components/Subtitle/Subtitle';
const App = () =>{
  
const text = "Soy un h1"
const textDos = "Soy un h2"
const parrafito = "Soy un parrafito"

  return(
    <> 
    <Title title={text}/>
    <Subtitle subtitle={textDos}/>
    <Parrafo parrafo= {parrafito}/>
    <Image src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScuiQS9wuBt0C_6f3Sa02YqD_UCEgrRTBLNA&usqp=CAU" alt = "perrito"/>
    </>
   



  )
}
export default App
