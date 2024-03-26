import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="content">
        <Image
          src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2R8ZW58MHx8MHx8fDA%3D"
          alt="Imagem de um restaurante"
          width={500}
          height={500}
        />
        <div>
          <h1>Restaurante</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend, arcu ut sodales tincidunt, justo massa fringilla risus, non tristique risus risus nec sapien. Phasellus ut augue lacinia, suscipit nisi ac, cursus libero.
          </p>
          <br />
          <br />
          <div>
            <Link href="https://www.google.com/maps" passHref>
              <a target="_blank">
                <Image
                  src="/images/maps.png"
                  alt="Ícone de mapa"
                  width={50}
                  height={50}
                />
              </a>
            </Link>
            <Link href="tel:+1234567890" passHref>
              <a>
                <Image
                  src="/images/telefone.png"
                  alt="Ícone de telefone"
                  width={50}
                  height={50}
                />
              </a>
            </Link>
          </div>
        </div>
      </div>




    </>
  );
}
