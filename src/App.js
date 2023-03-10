import logo from './logo.svg';
import './App.css';

function App() {
  let cadena = 'Hola alumnos de Numen'

  const objeto = {
    uno: 'uno',
    dos: 'dos'
  }

  const lista = [1,2,3,4,5,6];

  const listaMapeada = lista.map((item,index) => <li key={index + 1}>{item}</li>);

  return (
    <>
      {/* <h1 style={{
        color: 'red',
        fontSize: 50
      }}>Hola</h1>

      <p id='1' className='Numen'>{cadena}</p>
      <img src="" alt="" />

      <p>{objeto.uno}</p>
      <p>{objeto.dos}</p> */}
      <ul>
          {listaMapeada}
      </ul>
    </>
  );
}

export default App;
