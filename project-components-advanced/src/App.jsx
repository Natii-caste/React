//import React from "react";
import "./App.css";
import { CharacterList } from "./components/CharacterList/CharacterList";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { ItemList } from "./components/ItemList/ItemList";
import { Paragraph } from "./components/Paragraph/Paragraph";
import { SubTitle } from "./components/SubTitle/SubTitle";
import { Title } from "./components/Title/Title";

export const App = () => {
  const text1 = "Welcome to my App"
  const text2 = "You can enjoy it"
  const p1= "Created By Natalia"
  const p2 ="Copyright 2024 All Rights Reserved Powered By React"
  const Array = ["React", "Javascript","Imsonia","HTML5","CSS3","mongoDB","Cloudinary","Git"]
  return(
  <>
  <Header>
  <Title title ={text1}/> 
  <SubTitle subtitle = {text2}/>
  </Header>
  <main>
    <CharacterList>
      {Array.map((item =>(
      <ItemList lista = {item} key ={item}/>
      )))}
    </CharacterList>

  </main>
  <Footer>
    <Paragraph paragraph= {p1}/>
    <Paragraph paragraph= {p2}/>

  </Footer>
  </>
  )
};

