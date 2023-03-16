import React from 'react';
import Avatar from '../Avatar/Avatar';
import './Tarjeta.css';

const Tarjeta = ({email, nombre}) => {

    

    // // const props = {
    // //          email: "1@gmail.com",
    // //         nombre: "Petra"
    // // }

    // const {email, nombre} = props;

    return (
        <>
            <div className='tarjeta'>
                <Avatar />
                <h3>{nombre}</h3>
                <p>Email: {email}</p>
            </div>
        </>
    );
}

export default Tarjeta