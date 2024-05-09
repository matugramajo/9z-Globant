import React from "react";
import Link from "next/link";
import { TeamIcon } from "../app/9zlogo";

const Page: React.FC = () => {
  return (
    <>
      <header className="bg-[#000000] text-white font-mono text-xl tracking-wide">
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
            <a className="text-2xl font-bold hover:text-lime-400 ms-5" href="#">
              <TeamIcon />
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
      <main className="bg-[#000000] text-white">
        <div className="flex flex-row pt-10 pb-10">
          <img src="/banner.png" className="object-fill" />
        </div>
      </main>

      <footer className="bg-white dark:bg-[#000000]">
        <div style={{ borderTop: "2px solid #a3e635" }}></div>
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a
                href="https://9z.gg/inicio"
                className="flex items-center"
                target="_blank"
              >
                <img src="/9z.png" className="h-12 me-15" />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Links
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a
                      href="https://shop.9z.gg"
                      className="hover:text-lime-400"
                      target="_blank"
                    >
                      Tienda
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#">Inicio</a>
                  </li>
                  <li className="mb-4">
                    <Link href="/partidos" className="hover:text-lime-400">
                      Partidos
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/historia" className="hover:text-lime-400">
                      Historia
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Contacto
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a
                      href="https://www.instagram.com/9zteam/?hl=es"
                      className="hover:text-lime-400 "
                      target="_blank"
                    >
                      Instagram
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="https://twitter.com/9zTeam?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                      className="hover:text-lime-400 "
                      target="_blank"
                    >
                      X
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="https://discord.gg/wdJhqM6D"
                      className="hover:text-lime-400"
                      target="_blank"
                    >
                      Discord
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="https://www.youtube.com/channel/UCVvzv-yYEnPAYITBfjCriYg"
                      className="hover:text-lime-400 "
                      target="_blank"
                    >
                      Youtube
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              <a
                href="https://twitter.com/_____matilde"
                className="hover:text-lime-400"
              >
                ♡ Matilde Gramajo Dev{" "}
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Page;
