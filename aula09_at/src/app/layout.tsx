import type { Metadata } from "next";
import Header from "./Header/page";
import Footer from "./Footer/page";

import './css/estilo.css'

export const metadata: Metadata = {
  title: "Criando Rotas com NEXT",
  description: "Aula 05",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
