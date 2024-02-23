import './App.css'
import { Header } from './components'
import { Footer } from './components/Footer/Footer'
import { Image } from './components/Image/Image'
import { Main } from './components/Main/Main'
import { Paragraph } from './components/Paragraph/Paragraph'
import { Subtitle } from './components/Subtitle/Subtitle'
import { Title } from './components/Title/Title'



const App  = ()  => {
  const nombre = "hola soy title"
  const chiquito = "hola soy un subtitle"
  const paragrafito = "hola soy chiquito"

  return (
    <>
    <Header>
      <Title title = {nombre}/>
      <Subtitle subtitle = {chiquito}/>
    </Header>

    <Main>
    <Paragraph paragraph= {paragrafito}/>
    </Main>

    <Footer>
       <Image src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScuiQS9wuBt0C_6f3Sa02YqD_UCEgrRTBLNA&usqp=CAU" alt = "perrito"/>
    </Footer>
    </>

  )
}
 
export default App
