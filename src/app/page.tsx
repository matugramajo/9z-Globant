import React from "react";
import { TeamIcon } from "../app/9zlogo"

const Page: React.FC = () => {
  return (
    <>
      <header className="bg-[#0c0c0c] text-white font-mono text-xl tracking-wide">
      <div className="flex flex-row pb-2">
          <div className="flex items-center justify-center space-x-8 basis-1/3 ">
            <a className="hover:text-lime-400" href="noticias">
              NOTICIAS
            </a>
          </div>
          <div className="flex items-center justify-center space-x-8 basis-1/3 ">
            <a className="hover:text-lime-400" href="#">
              EQUIPOS
            </a>
          </div>
          <div className="flex items-center justify-center space-x-8 basis-1/3">
            <a className="text-2xl font-bold" href="#">
              <TeamIcon/>
            </a>
          </div>
          <div className="flex items-center justify-center space-x-8 basis-1/3">
            <a className="hover:text-lime-400" href="#">
              PARTIDOS
            </a>
          </div>
          <div className="flex items-center justify-center space-x-8 basis-1/3">
            <a className="hover:text-lime-400" href="#">
              HISTORIA
            </a>
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
