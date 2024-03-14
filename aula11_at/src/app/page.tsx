import MeuCastelo from "./MeuCastelo/page";
import MeuComp from "./MeuComp/page";

export default function Home() {
  return (
    <>
      <MeuCastelo />
      <MeuComp texto="Hello World!!" />
      <MeuComp texto="Isso é FIAP!!!" />
    </>
  );
}
