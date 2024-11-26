//import Image from "next/image";
//import { Inter } from "next/font/google";

//const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  function retnome() {
    return nome;
  }

  const nome = "Daniel Santos";
  const canal = "Globo";

  return (
    <main>
      <div>{retnome()}</div>
      <div>{canal}</div>
      <div>Typescript</div>
      <div>React</div>
    </main>
  );
}
