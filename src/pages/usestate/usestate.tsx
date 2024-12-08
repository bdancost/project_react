import { useState } from "react";
import DisplayState from "@/components/DisplayState";
import Topo from "@/components/Topo";

export default function Contador() {
  const [cont, setCont] = useState<number>(10);
  return (
    <div>
      <Topo />
      <div>
        Contador
        <DisplayState valor={cont} fvalor={setCont}></DisplayState>
      </div>
    </div>
  );
}
