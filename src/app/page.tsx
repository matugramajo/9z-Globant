import React from "react";
import Link from "next/link";
import { TeamIcon } from "../app/9zlogo";

const Page: React.FC = () => {
  return (
    <>
      <header className="bg-[#000000] text-white font-mono text-xl tracking-wide">
        <nav className="ml-auto gap-6 hidden md:flex">
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
        </nav>
        <nav className="text-lg flex md:hidden justify-between px-4">
          <div className="w-10"></div>
          <div className="flex ">
            <a className="hover:text-lime-400" href="#">
              <TeamIcon />
            </a>
          </div>
          <div className="flex items-center">
            <button
              data-collapse-toggle="navbar-hamburger"
              type="button"
              className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-200 rounded-lg focus:outline-none"
              aria-controls="navbar-hamburger"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>

            <div className="hidden w-full" id="navbar-hamburger">
              <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-white bg-blue-700 rounded dark:bg-blue-600"
                    aria-current="page"
                  >
                    Noticias
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Equipos
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Partidos
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Historia
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div style={{ borderBottom: "2px solid #a3e635" }}></div>
      </header>

      <main className="bg-[#000000] text-white">
        <nav className="ml-auto gap-6 hidden md:flex">
          <div className="flex flex-row pt-10 pb-10">
            <img src="/banner.png" className="object-fill" />
          </div>
        </nav>

        <nav className="ml-auto gap-6 text-lg flex md:hidden">
          <div className="flex flex-row pt-10 pb-10">
            <img src="/bannermobile.gif" className="object-fill" alt="GIF" />
          </div>
        </nav>
      </main>

      <footer className="bg-white dark:bg-[#000000]">
        <div style={{ borderTop: "2px solid #a3e635" }}></div>
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-center">
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
                    <a href="#" className="hover:text-lime-400 ">
                      Inicio
                    </a>
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
