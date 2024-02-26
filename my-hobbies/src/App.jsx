import './App.css'; 
import { Languages, SongsHeard } from './components';
import { Movies } from './components/Movies/Movies';
import { Read } from './components/Read/Read';
import { Sports } from './components/Sports/Sports';


const App = () =>{


  return (
   <>
    <Read/>
    <Sports/>
    <Movies/>
    <Languages/>
    <SongsHeard/>
   </>
   );
   };

export default App
