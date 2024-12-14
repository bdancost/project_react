import Topo from "@/components/Topo";
import { useState } from "react";

const carros = [
  { id: 0, marca: "Fiat", modelo: "Uno", valor: "20.000", ano: 2010 },
  { id: 1, marca: "Chevrolet", modelo: "Celta", valor: "30.000", ano: 2015 },
  { id: 2, marca: "Volkswagen", modelo: "Gol", valor: "40.000", ano: 2018 },
  { id: 3, marca: "Honda", modelo: "Civic", valor: "50.000", ano: 2020 },
  { id: 4, marca: "Toyota", modelo: "Corolla", valor: "60.000", ano: 2022 },
  { id: 5, marca: "Ford", modelo: "Mustang", valor: "70.000", ano: 2023 },
  { id: 6, marca: "Fiat", modelo: "Palio", valor: "35.000", ano: 2024 },
  { id: 7, marca: "Chevrolet", modelo: "Cruze", valor: "90.000", ano: 2025 },
  { id: 8, marca: "Volkswagen", modelo: "Golf", valor: "80.000", ano: 2024 },
  { id: 9, marca: "Honda", modelo: "Accord", valor: "100.000", ano: 2024 },
  { id: 10, marca: "Toyota", modelo: "Camry", valor: "120.000", ano: 2024 },
  { id: 11, marca: "Ford", modelo: "Explorer", valor: "150.000", ano: 2024 },
];

export default function Filtragem() {
  const [marca, setMarca] = useState<string>("");
  const [linhas, setLinhas] = useState<string[]>([]);

  function criarLinhas(marca: string) {
    setMarca(marca);
    const l: any[] = [];
    carros.forEach((c: any) => {
      if (c.marca == marca) {
        l.push(
          <div className="flex flex-row w-[500px]" key={c.id}>
            <div className="w-full">{c.marca}</div>
            <div className="w-full">{c.modelo}</div>
            <div className="w-full">{c.valor}</div>
          </div>
        );
      }
    });
    setLinhas(l);
  }

  return (
    <div>
      <Topo />

      <label>Selecione uma marca</label>
      <select
        value={marca}
        onChange={(evt) => {
          criarLinhas(evt.target.value);
        }}
      >
        <option value="">Nenhum</option>
        <option value="Fiat">Fiat</option>
        <option value="Chevrolet">Chevrolet</option>
        <option value="Volkswagen">Volkswagen</option>
        <option value="Honda">Honda</option>
        <option value="Toyota">Toyota</option>
        <option value="Ford">Ford</option>
      </select>

      <div className="flex flex-col gap-5">
        <div className="flex flex-row w-[500px]">
          <div className="w-full">Marca</div>
          <div className="w-full">Modelo</div>
          <div className="w-full">Valor</div>
        </div>
        {linhas}
      </div>
    </div>
  );
}
