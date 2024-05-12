import React from "react";
import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { TeamIcon } from "../9zlogo";

const Equipos = () => {
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
            <a className="hover:text-lime-400" href="/">
              <TeamIcon />
            </a>
          </div>
          <div className="flex items-center">
            <Menu>
              <MenuButton>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </MenuButton>
              <Transition
                enter="transition ease-out duration-75"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <MenuItems
                  anchor="bottom end"
                  className="[--anchor-gap:38px] w-52 origin-top-right rounded-xl border border-white/5 bg-black/75 p-1 text-white focus:outline-none flex flex-col items-center"
                >
                  <MenuItem>
                    <a
                      className="block data-[focus]:bg-blue-100 py-2 px-4 w-full text-center"
                      href="/noticias"
                    >
                      Noticias
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      className="block data-[focus]:bg-blue-100 py-2 px-4 w-full text-center"
                      href="/equipos"
                    >
                      Equipos
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      className="block data-[focus]:bg-blue-100 py-2 px-4 w-full text-center"
                      href="/partidos"
                    >
                      Partidos
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      className="block data-[focus]:bg-blue-100 py-2 px-4 w-full text-center"
                      href="/historia"
                    >
                      Historia
                    </a>
                  </MenuItem>
                </MenuItems>
              </Transition>
            </Menu>
          </div>
        </nav>
        <div style={{ borderBottom: "2px solid #a3e635" }}></div>
      </header>
      <main className="bg-[#121212] text-white">
        <div className="container my-24 mx-auto md:px-6">
          <section className="mb-32 text-center">
            <div className="grid gap-6 md:grid-cols-3 xl:gap-x-12">
              <div className="mb-6 lg:mb-0">
                <div className="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div className="flex">
                    <div
                      className="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      <img src="/max.png" className="w-full" />
                      <a href="#!">
                        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <h5 className="mb-2 text-lg font-bold">MAX</h5>
                    <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
                      Maximiliano Gonzalez
                    </h6>
                    <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
                      IGL
                    </h6>
                    <ul className="mb-6 flex justify-center">
                      <li>Uruguayo - 24 años</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mb-6 lg:mb-0">
                <div className="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div className="flex">
                    <div
                      className="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      <img src="/DGT.png" className="w-full" />
                      <a href="#!">
                        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <h5 className="mb-2 text-lg font-bold">DGT</h5>
                    <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
                      Franco Garcia
                    </h6>
                    <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
                      Rifler
                    </h6>
                    <ul className="mb-6 flex justify-center">
                      <li>Uruguayo - 22 años</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mb-6 lg:mb-0">
                <div className="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div className="flex">
                    <div
                      className="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      <img src="/buda.png" className="w-full" />
                      <a href="#!">
                        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <h5 className="mb-2 text-lg font-bold">Buda</h5>
                    <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
                      Nicolas Kramer
                    </h6>
                    <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
                      Rifler
                    </h6>
                    <ul className="mb-6 flex justify-center">
                      <li>Argentino - 20 años</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mb-6 lg:mb-0">
                <div className="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div className="flex">
                    <div
                      className="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      <img src="/huaso.png" className="w-full" />
                      <a href="#!">
                        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <h5 className="mb-2 text-lg font-bold">HUASOPEEK</h5>
                    <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
                      Matias Ibañez
                    </h6>
                    <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
                      Rifler
                    </h6>
                    <ul className="mb-6 flex justify-center">
                      <li>Chileno - 20 años</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mb-6 lg:mb-0">
                <div className="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div className="flex">
                    <div
                      className="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      <img src="/marti.png" className="w-full" />
                      <a href="#!">
                        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <h5 className="mb-2 text-lg font-bold">Martinez</h5>
                    <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
                      Antonio Martinez
                    </h6>
                    <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
                      AWPer
                    </h6>
                    <ul className="mb-6 flex justify-center">
                      <li>Español - 22 años</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mb-6 lg:mb-0">
                <div className="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div className="flex">
                    <div
                      className="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      <img src="/tge.png" className="w-full" />
                      <a href="#!">
                        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <h5 className="mb-2 text-lg font-bold">TGE</h5>
                    <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
                      Gustavo Motta
                    </h6>
                    <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
                      Coach
                    </h6>
                    <ul className="mb-6 flex justify-center">
                      <li>Brasilero - 26 años</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
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

export default Equipos;
