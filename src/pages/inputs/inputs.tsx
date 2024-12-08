import { useState } from "react";
import Topo from "@/components/Topo";

const cursos: { id: number; nome: string }[] = [
  { id: 1, nome: "HTML" },
  { id: 2, nome: "CSS" },
  { id: 3, nome: "JavaScript" },
  { id: 4, nome: "React" },
  { id: 5, nome: "Next" },
  { id: 6, nome: "Node" },
];

export default function Inputs() {
  const [nome, setNome] = useState<string>("");
  const [curso, setCurso] = useState<string>("");

  return (
    <div>
      <Topo />
      <div className="campoForm">
        <label>Nome</label>
        <input
          type="text"
          value={nome}
          onChange={(evt) => setNome(evt.target.value)}
        />
      </div>

      <div className="campoForm">
        <label>Curso</label>
        <select value={curso} onChange={(evt) => setCurso(evt.target.value)}>
          {cursos.map((c) => (
            <option key={c.id} value={c.nome}>{`Curso de ${c.nome}`}</option>
          ))}
        </select>
      </div>
      <div>Nome digitado: {nome}</div>
      <div>Curso escolhido: {curso}</div>
    </div>
  );
}
