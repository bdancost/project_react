import { useState, useEffect } from "react";
import Topo from "@/components/Topo";

export default function UseEffect() {
  const [cont, setCont] = useState<number>(0);
  const [aux, setAux] = useState<number>(0);

  useEffect(() => {
    alert("UseEffect disparado");
  }, []);

  function add() {
    let a = aux;
    a++;
    setAux(a);
  }

  return (
    <div>
      <Topo />
      <div>
        <p>{`Valor de cont: ${cont}`}</p>
        <p>{`Valor de aux: ${aux}`}</p>
        <button onClick={add}>Adicionar 1</button>
      </div>
    </div>
  );
}
