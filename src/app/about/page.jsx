export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto pt-8 px-8 md:px-0">
      <h2 className="text-2xl font-semibold mb-2">Sobre mí</h2>
      <p>
        Ingeniero en Tecnologías de la Información con experiencia en desarrollo
        de software web y móvil. Más de 2 años creando soluciones empresariales
        utilizando React, React Native, Node.js, Symfony y PostgreSQL. Enfocado
        en aplicaciones de gestión y facturación para PYMEs y gasolineras. Gran
        interés en el desarrollo móvil y en tecnologías modernas. Abierto a
        desafíos remotos y equipos internacionales.
      </p>
      <p>
        🛠️ Habilidades Técnicas * Lenguajes: JavaScript, TypeScript, PHP, Dart,
        SQL * Frontend: React, React Native, Flutter, HTML, CSS * Backend:
        Node.js, Symfony (PHP), Express * Bases de Datos: PostgreSQL, MySQL *
        Herramientas: Git, Docker, Postman, Figma, Firebase * Otros: APIs REST,
        integración de dispositivos móviles, arquitectura de software
      </p>
      <h3 className="text-xl font-semibold mt-8 mb-4">Experiencia Laboral</h3>
      <ol className="relative border-s-4 border-gray-400 ml-2">
        <li className="mb-10 ms-6">
          <span className="absolute w-4 h-4 bg-blue-600 rounded-full -start-2.5 border-4 border-white "></span>
          <time className="mb-1 text-sm font-normal text-gray-500 ">
            Mar 2024 – Mar 2026
          </time>
          <h4 className="text-lg font-semibold text-gray-900">
            Control Sistemas Informáticos – Desarrollador Full Stack / React
            Native
          </h4>
          <ul className="mt-2 list-disc list-inside text-gray-700">
            <li>
              Desarrollo de sistemas empresariales para facturación y gestión.
            </li>
            <li>
              App móvil completa en React Native para estaciones de servicio.
            </li>
            <li>Backend con Symfony y Node.js.</li>
            <li>Mejoras y mantenimiento en PostgreSQL y PHP.</li>
            <li>Trabajo ágil en equipo con Scrum.</li>
          </ul>
        </li>
        <li className="mb-10 ms-6">
          <span className="absolute w-4 h-4 bg-green-600 rounded-full -start-2.5 border-4 border-white "></span>
          <time className="mb-1 text-sm font-normal text-gray-500">
            2022 – 2023
          </time>
          <h4 className="text-lg font-semibold text-gray-900 ">
            Freelance (Fiverr) – Soporte técnico y colaboraciones
          </h4>
          <ul className="mt-2 list-disc list-inside text-gray-700">
            <li>Asesoría en apps móviles con Flutter y React Native.</li>
            <li>Apoyo en implementación de sistemas web.</li>
          </ul>
        </li>
      </ol>
      <h3 className="text-xl font-semibold mt-8 mb-4">Formación Académica</h3>
      <ol className="relative border-s-4 border-gray-400 ml-2">
        <li className="mb-10 ms-6">
          <span className="absolute w-4 h-4 bg-blue-600 rounded-full -start-2.5 border-4 border-white "></span>
          <time className="mb-1 text-sm font-normal text-gray-500 ">
            Titulación completa – 2025
          </time>
          <h4 className="text-lg font-semibold text-gray-900">
            Universidad Técnica de Manabí (UTM)
          </h4>
        </li>
        <li className="mb-10 ms-6">
          <span className="absolute w-4 h-4 bg-green-600 rounded-full -start-2.5 border-4 border-white "></span>
          <time className="mb-1 text-sm font-normal text-gray-500">
            Titulación completa – 2020
          </time>
          <h4 className="text-lg font-semibold text-gray-900 ">
            Unidad Educativa Particular Latinoamericano
          </h4>
        </li>
      </ol>
      <p>
        🌍 Idiomas * Español: Nativo * Inglés: Intermedio (capaz de leer
        documentación técnica y seguir contenido técnico en inglés)
      </p>

      <ol class="relative border-s border-gray-200 ">
        <li class="mb-10 ms-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white "></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 ">
            February 2022
          </time>
          <h3 class="text-lg font-semibold text-gray-900 ">
            Application UI code in Tailwind CSS
          </h3>
          <p class="mb-4 text-base font-normal text-gray-500">
            Get access to over 20+ pages including a dashboard layout, charts,
            kanban board, calendar, and pre-order E-commerce & Marketing pages.
          </p>
          <a
            href="#"
            class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 "
          >
            Learn more{" "}
            <svg
              class="w-3 h-3 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </li>
        <li class="mb-10 ms-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white "></div>
          <time class="mb-1 text-sm font-normal leading-none ">March 2022</time>
          <h3 class="text-lg font-semibold text-gray-900">
            Marketing UI design in Figma
          </h3>
          <p class="text-base font-normal text-gray-500 ">
            All of the pages and components are first designed in Figma and we
            keep a parity between the two versions even as we update the
            project.
          </p>
        </li>
        <li class="ms-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white "></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400">
            April 2022
          </time>
          <h3 class="text-lg font-semibold text-gray-900 ">
            E-Commerce UI code in Tailwind CSS
          </h3>
          <p class="text-base font-normal text-gray-500">
            Get started with dozens of web components and interactive elements
            built on top of Tailwind CSS.
          </p>
        </li>
      </ol>
    </section>
  );
}
