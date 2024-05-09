import { SVGProps } from "react";
import { TeamIcon } from "../noticias/9zlogo"

export function noticias() {
  return (
    <>
      <header className="bg-[#0c0c0c] text-white">
        <nav className="container mx-auto flex items-center justify-between py-4">
          <div className="flex items-center space-x-8">
            <a className="text-2xl font-bold" href="#">
            <TeamIcon className="h-10 w-10"/>
            </a>
          </div>
          <div className="flex items-center space-x-4">
          <a className=" hover:text-lime-400" href="#">
              INICIO
            </a>
            <a className="hover:text-lime-400" href="#">
              NOTICIAS
            </a>
            <a className="hover:text-lime-400" href="#">
              EQUIPOS
            </a>
            <a className="hover:text-lime-400" href="#">
              PARTIDOS
            </a>
            <a className="hover:text-lime-400" href="#">
              HISTORIA
            </a>
          </div>
        </nav>
      <div style={{ borderBottom: "2px solid #a3e635" }}></div>
      </header>
      <main className="bg-[#121212] text-white">

      </main>
    </>
  )
}

export default noticias;