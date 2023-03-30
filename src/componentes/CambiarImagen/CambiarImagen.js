import React, {  useContext, useState } from 'react'
import { UserContext } from '../../App';

import imagenPerro from '../../imagenes/pan.jpg'


const CambiarImagen = () => {
    const imagenes = {
        img1: "https://definicion.de/wp-content/uploads/2013/03/perro-1.jpg",
        img2: "https://definicion.de/wp-content/uploads/2013/03/cachorro.jpg"
    }

    const [mostrarImagen, setMostrarImagen] = useState(imagenes.img1);

    const cambiarImagen = () => {
        if (mostrarImagen === imagenes.img1) {
            setMostrarImagen(imagenes.img2);
        } else {
            setMostrarImagen(imagenes.img1)
        }
    }

    const users = useContext(UserContext);

    console.log(users)

  return (
    <>
    <img src={imagenPerro} alt="perro" />
    <button onClick={cambiarImagen}>Cambiar imagen</button>
    </>
  )
}

export default CambiarImagen