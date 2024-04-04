"use client"
import Link from "next/link";
import Image from "next/image";

import linksJson from "./links.json"

interface Dados{
    id : number;
    name : string;
    href : string;
}

const Header = () =>{
    return(
        <>
            <header>
                <div className="content">
                    <Link href="/">
                        <Image src="/imagens/logo.png" width={150} height={75} alt="Logo" ></Image>
                    </Link>
                    <ul>
                        {/* <li>
                            <Link href="/Sobre">Sobre</Link>
                        </li> */}
                        {
                            linksJson.map((item:Dados) => (
                                <li key={ item.id } >
                                    <Link href={ item.href }>{ item.name }</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </header>
        </>
    )
}
export default Header;