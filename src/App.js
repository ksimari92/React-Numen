import Avatar from "./componentes/Avatar/Avatar";
import Tarjeta from "./componentes/Tarjeta/Tarjeta";

function App() {
      const nombres= ["Ana","Maria","Petra"];
      const email = "1@gmail.com";


  return (
    <>
    {
      nombres.map( nombre => {
        return <Tarjeta email={email} nombre={nombre} />
      })
    }
      
    </>
  );
}

export default App;
