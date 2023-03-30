import React, { useContext } from 'react'
import { UserContext } from '../../App'

const Avatar = () => {
    const users = useContext(UserContext);

    console.log(users)
    return (
        <img src="https://img.freepik.com/vector-premium/ilustracion-plana-vector-avatar-mujer-avatar-mujer-joven-sonriente_469123-477.jpg?w=740" alt="" className='img-tarjeta' />
    )
}

export default Avatar