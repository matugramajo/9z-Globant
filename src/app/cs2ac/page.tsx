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
      <header className="bg-[#000000] text-white font-mono text-xl tracking-wide sticky top-0 z-10">
        <nav className="ml-auto gap-6 hidden md:flex">
          <div className="flex group items-center justify-center space-x-8 basis-1/3 ">
            <Link
              href="/noticias"
              className="hover:text-violet-600 transition duration-200 group-hover:scale-110"
            >
              NOTICIAS
            </Link>
          </div>
          <div className="flex group items-center justify-center space-x-8 basis-1/3 ">
            <Link href="/equipos" className="text-violet-600 scale-110">
              EQUIPOS
            </Link>
          </div>
          <div className="flex group items-center justify-center space-x-8 basis-1/3">
            <a
              className="text-2xl font-bold transition duration-200 group-hover:scale-110 ms-5"
              href="/"
            >
              <TeamIcon />
            </a>
          </div>
          <div className="flex group items-center justify-center space-x-8 basis-1/3">
            <Link
              href="/partidos"
              className="hover:text-violet-600 transition duration-200 group-hover:scale-110"
            >
              PARTIDOS
            </Link>
          </div>
          <div className="flex group items-center justify-center space-x-8 basis-1/3">
            <Link
              href="/historia"
              className="hover:text-violet-600 transition duration-200 group-hover:scale-110"
            >
              HISTORIA
            </Link>
          </div>
        </nav>
        <nav className="text-lg flex md:hidden justify-between px-4">
          <div className="w-10"></div>
          <div className="flex ">
            <a
              className="transition duration-200 group-hover:scale-110"
              href="/"
            >
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
        <div
          style={{ borderBottom: "2px solid #a3e635" }}
          className="pt-3"
        ></div>
      </header>
      <main className="bg-[#121212] text-white">
        <div className="container py-14 mx-auto px-6">
          <section className="text-center">
            <div className="grid gap-6 md:grid-cols-3 xl:gap-x-12">
              {/* 1st row */}
              <div className="pb-6 lg:pb-0">
                <div className="relative block rounded-lg  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-neutral-700">
                  <div className="flex">
                    <div
                      className="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      <img src="/divine.png" className="w-full" />
                      <a href="#!">
                        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 cursor-default"></div>
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <h5 className="mb-2 text-lg font-bold">divine</h5>
                    <h6 className="mb-4 font-medium text-primary-400">
                      Gustavo Santicioli Altapini
                    </h6>
                    <ul className="mb-6 flex justify-center">
                      <li>Brasil - 19 años</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="pb-6 lg:pb-0">
                <div className="relative block rounded-lg  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-neutral-700">
                  <div className="flex">
                    <div
                      className="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      <img src="/maxoff.png" className="w-full" />
                      <a href="#!">
                        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 cursor-default"></div>
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <h5 className="mb-2 text-lg font-bold">MaxOff</h5>
                    <h6 className="mb-4 font-medium text-primary-400">
                      Maximiliano Elefanté
                    </h6>
                    <ul className="mb-6 flex justify-center">
                      <li>Argentina - 19 años</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="pb-6 lg:pb-0">
                <div className="relative block rounded-lg  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-neutral-700">
                  <div className="flex">
                    <div
                      className="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      <img src="/slashzz.png" className="w-full" />
                      <a href="#!">
                        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 cursor-default"></div>
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <h5 className="mb-2 text-lg font-bold">slashzz</h5>
                    <h6 className="mb-4 font-medium text-primary-400">
                      Majed Ahmad
                    </h6>
                    <ul className="mb-6 flex justify-center">
                      <li>Brasil - 21 años</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* 2nd row */}
              <div className="pb-6 md:pt-6 lg:pb-0">
                <div className="relative block rounded-lg  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-neutral-700">
                  <div className="flex">
                    <div
                      className="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      <img src="/_esp1rit_o.png" className="w-full" />
                      <a href="#!">
                        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 cursor-default"></div>
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <h5 className="mb-2 text-lg font-bold">esp1rit_o</h5>
                    <h6 className="mb-4 font-medium text-primary-400">
                      Victor Menezes
                    </h6>
                    <ul className="mb-6 flex justify-center">
                      <li>Brasilero - 30 años</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="pb-6 md:pt-6 lg:pb-0">
                <div className="relative block rounded-lg  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-neutral-700">
                  <div className="flex">
                    <div
                      className="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      <img src="/noface.png" className="w-full" />
                      <a href="#!">
                        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 cursor-default"></div>
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <h5 className="mb-2 text-lg font-bold">neozix</h5>
                    <h6 className="mb-4 font-medium text-primary-400">
                      Isaac Bruce
                    </h6>
                    <ul className="mb-6 flex justify-center">
                      <li>Brasil - 17 años</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mb-6 md:pt-6 lg:mb-0">
                <div className="relative block rounded-lg  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-neutral-700">
                  <div className="flex">
                    <div
                      className="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      <img src="/noface.png" className="w-full" />
                      <a href="#!">
                        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 cursor-default"></div>
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <h5 className="mb-2 text-lg font-bold">lezy (Stand In)</h5>
                    <h6 className="mb-4 font-medium text-primary-400">
                      Lucas Motta
                    </h6>
                    <ul className="mb-6 flex justify-center">
                      <li>Brasil - 17 años</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div style={{ borderBottom: "2px solid #a3e635" }}></div>
      </main>

      <footer className="text-center text-surface/75 bg-[#000000] text-white/75 lg:text-left">
        <div className="flex items-center justify-center px-6 pt-6 lg:justify-between">
          <div className="font-sans text-xl font-semibold tracking-wide">
            <span>#TodoVioleta</span>
          </div>
        </div>
        <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 border-white/10 lg:justify-between">
          <div className="flex justify-center">
            <a
              href="https://twitter.com/9zTeam?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
              className="me-6 [&>svg]:h-6 [&>svg]:w-4 hover:text-violet-600"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 512 512"
              >
                {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. --> */}
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/9zteam/?hl=es"
              className="me-6 [&>svg]:h-6 [&>svg]:w-4 hover:text-violet-600"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512"
              >
                {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. --> */}
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/channel/UCVvzv-yYEnPAYITBfjCriYg"
              className="me-6 [&>svg]:h-6 [&>svg]:w-7 hover:text-violet-600"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 320 512"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <path d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728 c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137 C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607 c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z"></path>{" "}
                  </g>{" "}
                </g>
              </svg>
            </a>
            <a
              href="https://discord.gg/wdJhqM6D"
              className="[&>svg]:h-11 [&>svg]:w-9 pt-0.5 hover:text-violet-600"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512"
              >
                <path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="mx-6 pt-10 text-left flex">
          <div className="grid-1 grid gap-8 md:grid-cols-2">
            <div>
              <h6 className="mb-4 flex font-semibold uppercase md:justify-start">
                LINKS OFICIALES
              </h6>
              <p className="mb-4 hover:text-violet-600">
                <a href="https://shop.9z.gg" target="_blank">
                  Tienda
                </a>
              </p>
              <p className="mb-4 hover:text-violet-600">
                <a href="https://9z.gg/inicio" target="_blank">
                  Página oficial
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-black/5 p-6 text-center ">
          <a
            href="https://linktr.ee/matildegramajo"
            target="_blank"
            className="hover:text-violet-600"
          >
            ♡ Matilde Gramajo Dev
          </a>
        </div>
      </footer>
    </>
  );
};

export default Equipos;
