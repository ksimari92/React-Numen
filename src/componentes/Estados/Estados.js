import React, {useState, useEffect} from 'react'

const Estados = () => {
    const [counter, setCounter] = useState(0);

    const getUsers = () => {
        fetch("https://reqres.in/api/users?page=2")
        .then(response => response.json())
        .then(data => console.log(data.data))
    }
    
    useEffect(() => {
        
        getUsers();
            
  
    }, [])

 
    const incrementar = () => {
        setCounter(counter + 1);
    }

    const decrementar = () => {
        setCounter(counter - 1)
    }

  return (
    <>
    <h1>Contador</h1>

    <h4>{counter}</h4>
    <button onClick={incrementar}>Sumar 1</button>
    <button onClick={decrementar}> Restar 1</button>


   
    </>
  )
}

export default Estados