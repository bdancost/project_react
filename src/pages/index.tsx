//import Image from "next/image";
//import { Inter } from "next/font/google";

//const inter = Inter({ subsets: ["latin"] });

const nome = "Daniel Santos";
const canal = "Globo";

function Topo() {
  return (
    <div className="flex justify-between items-center bg-zinc-300 h-[100px]">
      <div>Logo</div>
      <div className="flex flex-col justify-center items-center">
        <div className="text-3xl">{canal}</div>
        <div className="subtituloTopo">Curso de React</div>
      </div>
      <div>{nome}</div>
    </div>
  );
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
