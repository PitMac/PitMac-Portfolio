"use client";
import { Icon } from "@iconify/react";
import { useState } from "react";

const skillsData = {
  Frontend: [
    { name: "React", icon: "logos:react" },
    { name: "React Native", icon: "logos:react" },
    { name: "Flutter", icon: "logos:flutter" },
    { name: "HTML", icon: "logos:html-5" },
    { name: "CSS", icon: "logos:css-3" },
  ],
  Backend: [
    { name: "Node.js", icon: "logos:nodejs-icon" },
    { name: "Symfony", icon: "logos:symfony" },
    { name: "Express", icon: "simple-icons:express" },
  ],
  "Bases de Datos": [
    { name: "PostgreSQL", icon: "logos:postgresql" },
    { name: "MySQL", icon: "logos:mysql" },
    { name: "MongoDB", icon: "logos:mongodb" },
  ],
  Herramientas: [
    { name: "Git", icon: "logos:git-icon" },
    { name: "Docker", icon: "logos:docker-icon" },
    { name: "Postman", icon: "logos:postman-icon" },
    { name: "Figma", icon: "logos:figma" },
    { name: "Firebase", icon: "logos:firebase" },
  ],
};

export default function AboutPage() {
  const categories = Object.keys(skillsData);
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <section className="max-w-3xl mx-auto pt-8 px-8 md:px-0 pb-4">
      <h2 className="text-2xl font-semibold mb-2">Sobre mí</h2>
      <p>
        Ingeniero en Tecnologías de la Información con experiencia en desarrollo
        de software web y móvil. Más de 2 años creando soluciones empresariales
        utilizando React, React Native, Node.js, Symfony y PostgreSQL. Enfocado
        en aplicaciones de gestión y facturación para PYMEs y gasolineras. Gran
        interés en el desarrollo móvil y en tecnologías modernas. Abierto a
        desafíos remotos y equipos internacionales.
      </p>

      <h3 className="text-xl font-semibold mb-4 mt-6">Habilidades Técnicas</h3>
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-4 cursor-pointer py-1 rounded-md border text-sm font-medium ${
              activeTab === cat
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 border-gray-300"
            } hover:bg-blue-500 hover:text-white transition`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {skillsData[activeTab].map((skill) => (
          <div key={skill.name} className="flex items-center gap-2">
            <Icon icon={skill.icon} width={24} height={24} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
      <h4 className="text-l font-semibold mt-8 mb-4">Otros</h4>
      <ul className="mt-2 list-disc list-inside">
        <li>APIs REST.</li>
        <li>Integración de dispositivos móviles.</li>
        <li>Arquitectura de software.</li>
      </ul>
      <h3 className="text-xl font-semibold mt-8 mb-4 text-white">
        Experiencia Laboral
      </h3>
      <ol className="relative border-s-4 border-gray-600 ml-2">
        <li className="mb-10 ms-6">
          <span className="absolute w-4 h-4 bg-blue-500 rounded-full -start-2.5 border-4 border-gray-900"></span>
          <time className="mb-1 text-sm font-normal text-gray-400">
            Mar 2024 – Mar 2026
          </time>
          <h4 className="text-lg font-semibold text-white">
            Control Sistemas Informáticos – Desarrollador Full Stack / React
            Native
          </h4>
          <ul className="mt-2 list-disc list-inside text-gray-300">
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
          <span className="absolute w-4 h-4 bg-green-500 rounded-full -start-2.5 border-4 border-gray-900"></span>
          <time className="mb-1 text-sm font-normal text-gray-400">
            2022 – 2023
          </time>
          <h4 className="text-lg font-semibold text-white">
            Freelance (Fiverr) – Soporte técnico y colaboraciones
          </h4>
          <ul className="mt-2 list-disc list-inside text-gray-300">
            <li>Asesoría en apps móviles con Flutter y React Native.</li>
            <li>Apoyo en implementación de sistemas web.</li>
          </ul>
        </li>
      </ol>

      <h3 className="text-xl font-semibold mt-8 mb-4 text-white">
        Formación Académica
      </h3>
      <ol className="relative border-s-4 border-gray-600 ml-2">
        <li className="mb-10 ms-6">
          <span className="absolute w-4 h-4 bg-blue-500 rounded-full -start-2.5 border-4 border-gray-900"></span>
          <time className="mb-1 text-sm font-normal text-gray-400">
            Titulación completa – 2025
          </time>
          <h4 className="text-lg font-semibold text-white">
            Universidad Técnica de Manabí (UTM) - Ing. Tecnología de la
            Información
          </h4>
        </li>
        <li className="mb-10 ms-6">
          <span className="absolute w-4 h-4 bg-green-500 rounded-full -start-2.5 border-4 border-gray-900"></span>
          <time className="mb-1 text-sm font-normal text-gray-400">
            Titulación completa – 2020
          </time>
          <h4 className="text-lg font-semibold text-white">
            Unidad Educativa Particular Latinoamericano - Bachiller Técnico
          </h4>
        </li>
      </ol>

      <h3 className="text-xl font-semibold mt-8 mb-4">Idiomas</h3>
      <ul className="mt-2 list-disc list-inside">
        <li>Español: Nativo.</li>
        <li>
          Intermedio (capaz de leer documentación técnica y seguir contenido
          técnico en inglés).
        </li>
      </ul>
    </section>
  );
}
