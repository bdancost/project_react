import Card from "../../components/Card";
import Topo from "../../components/Topo";

interface Produto {
  produto: string;
  valor: number;
  desconto: number;
  disponivel: boolean;
}

const produtos: Produto[] = [
  {
    produto: "Mouse",
    valor: 49.9,
    desconto: 0,
    disponivel: true,
  },

  {
    produto: "Teclado",
    valor: 99.9,
    desconto: 0,
    disponivel: true,
  },

  {
    produto: "Monitor",
    valor: 100,
    desconto: 0,
    disponivel: true,
  },

  {
    produto: "Impressora",
    valor: 399.9,
    desconto: 50,
    disponivel: true,
  },

  {
    produto: "CPU",
    valor: 999.9,
    desconto: 100,
    disponivel: true,
  },

  {
    produto: "Microfone",
    valor: 65.0,
    desconto: 0,
    disponivel: true,
  },
];

function calcDesc(v: number, d: number) {
  return parseFloat((v - d).toFixed(2));
}

export default function produtosPagina() {
  return (
    <div>
      <Topo />
      <div className="flex justify-center gap-3">
        {produtos.map((e: Produto) => {
          if (e.disponivel)
            return (
              <Card
                key={e.produto}
                produto={e.produto}
                valor={e.valor}
                desconto={e.desconto}
                funcao={calcDesc}
              />
            );
        })}
      </div>
    </div>
  );
}
