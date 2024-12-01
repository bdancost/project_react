import Card from "../../components/Card";
import Topo from "../../components/Topo";
import { useRouter } from "next/router";

interface Produto {
  id: number;
  produto: string;
  valor: number;
  desconto: number;
  disponivel: boolean;
}

const produtos: Produto[] = [
  {
    id: 1,
    produto: "Mouse",
    valor: 49.9,
    desconto: 5,
    disponivel: true,
  },

  {
    id: 2,
    produto: "Teclado",
    valor: 99.9,
    desconto: 0,
    disponivel: true,
  },

  {
    id: 3,
    produto: "Monitor",
    valor: 100,
    desconto: 0,
    disponivel: true,
  },

  {
    id: 4,
    produto: "Impressora",
    valor: 399.9,
    desconto: 50,
    disponivel: true,
  },

  {
    id: 5,
    produto: "CPU",
    valor: 999.9,
    desconto: 100,
    disponivel: true,
  },

  {
    id: 6,
    produto: "Microfone",
    valor: 65.0,
    desconto: 0,
    disponivel: true,
  },
];

function calcDesc(v: number, d: number) {
  return parseFloat((v - d).toFixed(2));
}

export default function ProdutosPagina() {
  const router = useRouter();
  const { nome, curso } = router.query;
  console.log(nome, curso);
  return (
    <div>
      <Topo />
      <div className="flex justify-center gap-3">
        {produtos.map((e: Produto) => {
          if (e.disponivel)
            return (
              <Card
                key={e.id}
                produto={e.produto}
                valor={e.valor}
                desconto={e.desconto}
                funcao={calcDesc}
              >
                <div>Teste Curso de React Next</div>
                <div>Curso de React Native</div>
              </Card> // Adicionei o texto aqui
            );
        })}
      </div>
    </div>
  );
}
