import React from 'react';
import './Tarjeta.css';
import TarjetaImagen from './TarjetaImagen';
import TarjetaNombre from './TarjetaNombre';
import TarjetaPrecio from './TarjetaPrecio';
import TarjetaBoton from './TarjetaBoton';

const Tarjeta = ({producto}) => {

    return (
     <div className='tarjeta'>
        <TarjetaNombre nombre={producto.producto} />
        <TarjetaImagen url={producto.imagen} />
        <TarjetaPrecio precio={producto.precio}/>
       <TarjetaBoton/>
     </div>
    );
}

export default Tarjeta