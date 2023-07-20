import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Texto from "./components/Texto";

const textoModificado = "my friend!";

function App() {
  return (
    <>
      <Texto textoModificado={textoModificado}></Texto>
    </>
  );
}

export default App;
