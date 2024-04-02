"use client"
import Link from "next/link";

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
                    <h1>Header</h1>
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