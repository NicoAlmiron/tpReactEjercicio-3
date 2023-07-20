import { useState } from "react";
import { Button } from "react-bootstrap";

const Texto = ({ textoModificado }) => {
  const [msj, setMsj] = useState("");

  return (
    <section>
      <h1>
        Hello {textoModificado}
        {msj}!
      </h1>
      <Button variant="primary" onClick={() => setMsj("(from changed state)")}>
        Click Me
      </Button>
    </section>
  );
};

export default Texto;
