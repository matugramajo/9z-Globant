import React from "react";
import Link from 'next/link';
import { TeamIcon } from "../app/9zlogo"

const Page: React.FC = () => {
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
            <a className="text-2xl font-bold" href="#">
              <TeamIcon/>
            </a>
          </div>
          <div className="flex items-center justify-center space-x-8 basis-1/3">
            <Link href="/partidos" className="hover:text-lime-400">
              PARTIDOS
            </Link>
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
      <div className="flex flex-row pt-10">
        <img src="/banner.png" className="object-fill" />
      </div>
      </main>
    </>
  );
};

export default Page;
