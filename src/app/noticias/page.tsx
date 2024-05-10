import React from "react";
import Link from "next/link";
import { TeamIcon } from "../9zlogo";

const Noticias = () => {
  return (
    <>
      <header className="bg-[#0c0c0c] text-white font-mono text-xl tracking-wide">
        <div className="flex flex-row pb-2">
          <div className="flex items-center justify-center space-x-8 basis-1/3 ">
            <a className="text-2xl font-bold" href="#">
              NOTICIAS
            </a>
          </div>
          <div className="flex items-center justify-center space-x-8 basis-1/3 ">
            <Link href="/equipos" className="hover:text-lime-400">
              EQUIPOS
            </Link>
          </div>
          <div className="flex items-center justify-center space-x-8 basis-1/3">
            <Link href="/" className="hover:text-lime-400">
              <TeamIcon />
            </Link>
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
        <div className="container my-24 mx-auto md:px-6">
          <section className="mb-32 text-center md:text-left">
            <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
              <div className="mb-6 md:mb-0">
                <div
                  className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <img
                    src="https://pbs.twimg.com/media/GNJ60SiX0AAN-3b?format=jpg&name=4096x4096"
                    className="w-full"
                  />
                  <a href="#!">
                    <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-2xl font-bold">
                  ¡DOS AÑOS DE NUESTRO DEBUT EN EL MAJOR!
                </h3>
                <div className="mb-3 flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500 md:justify-start">
                  <img
                    src="/9z.png"
                    className="mr-2 h-8 rounded-full"
                    alt="avatar"
                    loading="lazy"
                  />
                  CS2 Main
                </div>
                <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                  <small>09.05.2024</small>
                </p>
                <p className="text-neutral-500 dark:text-neutral-300">
                  Hoy es un día más que especial para nosotros. Además del
                  aniversario de 5 años de DGT, hoy se cumplen 2 años desde
                  nuestro debut en el #PGLMajor de Amberes, día en el que
                  quedamos inmortalizados para toda la historia del Counter
                  Strike mundial.
                </p>
              </div>
            </div>

            <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
              <div className="mb-6 md:order-2 md:mb-0">
                <div
                  className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <img
                    src="https://pbs.twimg.com/media/GNGDrIeWcAAysir?format=jpg&name=4096x4096"
                    className="w-full"
                  />
                  <a href="#!">
                    <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                  </a>
                </div>
              </div>

              <div className="md:order-1">
                <h3 className="mb-3 text-2xl font-bold">
                  9z invitado la clasificación de SA para la Thunderpick WC 2024
                </h3>
                <div className="mb-3 flex items-center justify-center text-sm font-medium text-primary dark:text-primary-400 md:justify-start">
                  <img
                    src="/9z.png"
                    className="mr-2 h-8 rounded-full"
                    alt="avatar"
                    loading="lazy"
                  />
                  CS2 Main
                </div>
                <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                  <small>07.05.2024</small>
                </p>
                <p className="text-neutral-500 dark:text-neutral-300">
                  Sigue la acción del Main de CS2 en Mayo. Este mísmo Sábado
                  comienza la primera qualy de SA a la Thunderpick World
                  Championship 2024. 16 equipos se enfrentarán en un bracket de
                  eliminación directa a BO3. El ganador será el primer
                  clasificado de SA a la #ThunderpickWC 2024.
                </p>
              </div>
            </div>

            <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
              <div className="mb-6 md:mb-0">
                <div
                  className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <img src="/dudu.png" className="w-full" />
                  <a href="#!">
                    <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-2xl font-bold">
                  ¡DUDU EN LA GRAN FINAL!
                </h3>
                <div className="mb-3 flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500 md:justify-start">
                  <img
                    src="/9z.png"
                    className="mr-2 h-8 rounded-full"
                    alt="avatar"
                    loading="lazy"
                  />
                  Sim Racing
                </div>
                <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                  <small>07.05.2024</small>
                </p>
                <p className="text-neutral-500 dark:text-neutral-300">
                  Nuestro corredor de Simracing logró el primer puesto con
                  amplia diferencia en la etapa regular del Super turismo de
                  Marcas y clasificó a la gran final presencial que se jugará el
                  19 de mayo en Villa Urquiza.
                </p>
              </div>
            </div>

            <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
              <div className="mb-6 md:order-2 md:mb-0">
                <div
                  className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <img
                    src="https://pbs.twimg.com/media/GMrmfiLXoAADL94?format=jpg&name=large"
                    className="w-full"
                  />
                  <a href="#!">
                    <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                  </a>
                </div>
              </div>

              <div className="md:order-1">
                <h3 className="mb-3 text-2xl font-bold">
                  ¡9zG confirmado en la RES Latam Series #4!
                </h3>
                <div className="mb-3 flex items-center justify-center text-sm font-medium text-primary dark:text-primary-400 md:justify-start">
                  <img
                    src="/9z.png"
                    className="mr-2 h-8 rounded-full"
                    alt="avatar"
                    loading="lazy"
                  />
                  CS2 Main
                </div>
                <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                  <small>03.05.2024</small>
                </p>
                <p className="text-neutral-500 dark:text-neutral-300">
                  ¡9zG confirmado en la RES Latam Series #4! La ultima edición
                  del torneo comienza éste Domingo, en donde 9z integra el Grupo
                  D junto a: BESTIA, Sharks y VikingsKR. El primer match de la
                  Violeta será el día Lunes, a las 14:00 hs 🇦🇷 vs VikingsKR. El
                  formato del torneo esta dividido en dos fases: Grupos: formato
                  GSL a BO3. Playoffs: eliminación simple a BO3. El prize pool
                  del torneo es: $50,000 USD a repartir 190 puntos "RGL" para la
                  clasificación a la RES Regional Champions.
                </p>
              </div>
            </div>

            <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
              <div className="mb-6 md:mb-0">
                <div
                  className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <img
                    src="https://pbs.twimg.com/media/GMrAbHBXEAA-pqk?format=jpg&name=large"
                    className="w-full"
                  />
                  <a href="#!">
                    <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-2xl font-bold">
                  ¡9zG confirmado en la CBCS #4!
                </h3>
                <div className="mb-3 flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500 md:justify-start">
                  <img
                    src="/9z.png"
                    className="mr-2 h-8 rounded-full"
                    alt="avatar"
                    loading="lazy"
                  />
                  CS2 Main
                </div>
                <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                  <small>03.05.2024</small>
                </p>
                <p className="text-neutral-500 dark:text-neutral-300">
                  ¡9zG confirmado en la CBCS #4! El equipo estará participando
                  en la primera edición del año de CBCS. Integramos el Grupo A
                  con: Oddik, Galorys, Case, Team Solid, Krü, Intense e
                  inSanitY. El torneo comienza el 12/5, donde nuestro primer
                  match será vs Insanity. El formato del torneo esta dividido en
                  dos fases: Grupos: formato de doble eliminación a BO3, los
                  mejores tres equipos pasan a playoffs. Playoffs: eliminación
                  simple a BO3, excepto final a BO5. Esta edición reparte:
                  R$100,000 Reales
                </p>
              </div>
            </div>

            <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
              <div className="mb-6 md:order-2 md:mb-0">
                <div
                  className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <img
                    src="https://pbs.twimg.com/media/GMnBhSEXUAAZVnr?format=jpg&name=medium"
                    className="w-full"
                  />
                  <a href="#!">
                    <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                  </a>
                </div>
              </div>

              <div className="md:order-1">
                <h3 className="mb-3 text-2xl font-bold">
                  ¡Comienza la PMSL AMERICAS, nuestro principal torneo regional
                  de PUBG MOBILE!
                </h3>
                <div className="mb-3 flex items-center justify-center text-sm font-medium text-primary dark:text-primary-400 md:justify-start">
                  <img
                    src="/9z.png"
                    className="mr-2 h-8 rounded-full"
                    alt="avatar"
                    loading="lazy"
                  />
                  PUBG Mobile
                </div>
                <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                  <small>03.05.2024</small>
                </p>
                <p className="text-neutral-500 dark:text-neutral-300">
                  El día 22 de Mayo comienza el primer split de la PMSL
                  Americas, la super liga oficial de PUBGM. El torneo será
                  offline en Brasil contando con 16 equipos participantes: 6 de
                  Brasil, 6 de LATAM y 4 de NA. Los mejores 4 equipos del torneo
                  viajarán a los Esports World Cup.
                </p>
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

export default Noticias;
