import Tarjeta from "./componentes/Tarjeta/Tarjeta";
import pan from './imagenes/pan.jpg'
import Estados from "./componentes/Estados/Estados";
import Theme from "./componentes/Theme/Theme";
import CambiarImagen from "./componentes/CambiarImagen/CambiarImagen";

function App() {
  
  const datos = [{
    "id": 1,
    "producto": "Pan",
    "precio": 250,
    "imagen": "https://www.recetasdepan.net/wp-content/uploads/2020/11/Receta-de-barra-espa%C3%B1ola.jpg"
  },
  {
    "id": 2,
    "producto": "Leche",
    "precio": 200,
    "imagen": "https://carrefourar.vtexassets.com/arquivos/ids/229098-800-auto?v=637727700141700000&width=800&height=auto&aspect=true"
  },
  {
    "id": 3,
    "producto": "Queso",
    "precio": 500,
    "imagen": "https://superdepaso.com.ar/wp-content/uploads/2021/06/SANTAROSA-PATEGRAS-04.jpg"
  },
  {
    "id": 4,
    "producto": "Jamon",
    "precio": 300,
    "imagen": "https://www.gastronomiavasca.net/uploads/image/file/3283/w700_fiambre_jamon_cocido.jpg"
  }
  ]


  return (
    <>
      {/* {
        datos.map(producto => {
          return <Tarjeta producto={producto} />
        })
      } */}

      {/* <img src={pan} alt="" /> */}
      {/* <Estados/> */}
      <CambiarImagen/>
    </>
  );
}

export default App;
