import { useState } from 'react'


const On = () => {
    const [boton, setBoton] = useState(true)

    const Cambiar = () => {
        setBoton(!boton)
    }

    return(
        <div>
            <h1>{boton? 'True': 'False'}</h1>
        <button onClick = {(Cambiar)}>Click</button> 
        </div>
    )
    
}   


export default On
