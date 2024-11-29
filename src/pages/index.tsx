//import Image from "next/image";
//import { Inter } from "next/font/google";

//const inter = Inter({ subsets: ["latin"] });

import Topo from "@/components/Topo";
import Card from "@/components/Card";

const nome = "Daniel Santos";
const canal = "Globo";

function calcDesc(v: number, d: number) {
  return v - d;
}

function calcDesc2(v: number, d: number) {
  return v - d / 2;
}

export default function Home() {
  return (
    <div>
      <Topo />
      <div style={testecss}>
        <div>{canal}</div>
        <div>Typescript</div>
        <div style={{ color: "red", backgroundColor: "#bbb" }}>React</div>
      </div>
      <div className="flex justify-center gap-3">
        <Card produto={"Mouse"} valor={49.9} desconto={2} funcao={calcDesc} />
        <Card produto={"Teclado"} valor={99.9} desconto={0} funcao={calcDesc} />
        <Card
          produto={"Monitor"}
          valor={299.9}
          desconto={5}
          funcao={calcDesc2}
        />
        <Card
          produto={"Impressora"}
          valor={399.9}
          desconto={50}
          funcao={calcDesc2}
        />
      </div>
    </div>
  );
}

const testecss = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "blue",
  backgroundColor: "#eee",
  fontSize: "20px",
};
