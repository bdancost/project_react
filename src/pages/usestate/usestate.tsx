import { useState } from "react";
import DisplayState from "@/components/DisplayState";

export default function Contador() {
  const [cont, setCont] = useState<number>(10);
  return (
    <div>
      Contador
      <DisplayState valor={cont} fvalor={setCont}></DisplayState>
    </div>
  );
}
