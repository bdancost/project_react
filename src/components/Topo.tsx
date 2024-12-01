import Link from "next/link";

export default function Topo() {
  return (
    <div className="flex flex-col justify-between items-center bg-zinc-300 h-[130px]">
      <div>Logo</div>
      <div className="flex flex-col justify-center      items-center">
        <div className="text-3xl">Globo</div>
        <div className="subtituloTopo">Curso de React</div>
      </div>
      <div>
        <nav>
          <Link href={"/"}>Home</Link>
          <Link
            href={{
              pathname: "/produtos/produtos",
              query: {
                nome: "Leonardo",
                curso: "React Next",
              },
            }}
          >
            Produtos
          </Link>
          <Link href="/teste/teste">Teste</Link>
        </nav>
      </div>
    </div>
  );
}
