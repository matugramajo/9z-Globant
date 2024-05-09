import React from "react";
import Link from 'next/link';
import { TeamIcon } from "../9zlogo"

const Partidos = () => {
  return (
    <>
      <header className="bg-[#0c0c0c] text-white font-mono text-xl tracking-wide">
      <div className="flex flex-row pb-2">
          <div className="flex items-center justify-center space-x-8 basis-1/3 ">
            <Link href="/noticias" className="hover:text-lime-400">
              NOTICIAS
            </Link>
          </div>
          <div className="flex items-center justify-center space-x-8 basis-1/3 ">
            <Link href="/equipos" className="hover:text-lime-400">
              EQUIPOS
            </Link>
          </div>
          <div className="flex items-center justify-center space-x-8 basis-1/3">
            <Link href="/" className="hover:text-lime-400">
              <TeamIcon/>
            </Link>
          </div>
          <div className="flex items-center justify-center space-x-8 basis-1/3">
            <a className="text-2xl font-bold" href="#">
              PARTIDOS
            </a>
          </div>
          <div className="flex items-center justify-center space-x-8 basis-1/3">
          <Link href="/historia" className="hover:text-lime-400">
              HISTORIA
          </Link>
          </div>
        </div>
      <div style={{ borderBottom: "2px solid #a3e635" }}></div>
      </header>
      <main className="bg-[#121212] text-white">

      </main>
    </>
  );
};

export default Partidos;