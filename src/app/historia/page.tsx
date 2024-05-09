import React from "react";
import Link from 'next/link';
import { TeamIcon } from "../9zlogo"

const Historia = () => {
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
            <Link href="/partidos" className="hover:text-lime-400">
              PARTIDOS
            </Link>
          </div>
          <div className="flex items-center justify-center space-x-8 basis-1/3">
            <a className="text-2xl font-bold" href="#">
              HISTORIA
            </a>
          </div>
        </div>
      <div style={{ borderBottom: "2px solid #a3e635" }}></div>
      </header>
      <main className="bg-[#121212] text-white">

      </main>
    </>
  );
};

export default Historia;