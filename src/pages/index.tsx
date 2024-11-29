//import Image from "next/image";
//import { Inter } from "next/font/google";

//const inter = Inter({ subsets: ["latin"] });

import Topo from "@/components/Topo";
import Card from "@/components/Card";
import Link from "next/link";

const canal = "Globo";

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
