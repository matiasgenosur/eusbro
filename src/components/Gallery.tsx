"use client";

import { useState } from "react";

type ProjectCategory = "all" | "residencial" | "comercial" | "industrial";

const projects = [
  {
    id: 1,
    title: "Casa en Las Condes",
    category: "residencial" as const,
    description: "Reparación completa de techo con filtraciones",
    image: "/projects/residencial-1.jpg",
  },
  {
    id: 2,
    title: "Edificio Corporativo",
    category: "comercial" as const,
    description: "Impermeabilización de terraza y techumbre",
    image: "/projects/comercial-1.jpg",
  },
  {
    id: 3,
    title: "Galpón Industrial",
    category: "industrial" as const,
    description: "Construcción de techo nuevo de 2000m²",
    image: "/projects/industrial-1.jpg",
  },
  {
    id: 4,
    title: "Villa en Lo Barnechea",
    category: "residencial" as const,
    description: "Mantención preventiva y pintura",
    image: "/projects/residencial-2.jpg",
  },
  {
    id: 5,
    title: "Centro Comercial",
    category: "comercial" as const,
    description: "Reparación de goteras múltiples",
    image: "/projects/comercial-2.jpg",
  },
  {
    id: 6,
    title: "Bodega Logística",
    category: "industrial" as const,
    description: "Refuerzo estructural y nuevo revestimiento",
    image: "/projects/industrial-2.jpg",
  },
];

const filters: { label: string; value: ProjectCategory }[] = [
  { label: "Todos", value: "all" },
  { label: "Residencial", value: "residencial" },
  { label: "Comercial", value: "comercial" },
  { label: "Industrial", value: "industrial" },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="proyectos" className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Nuestros Proyectos
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-secondary">
            Galería de Trabajos Realizados
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Conoce algunos de los proyectos que hemos completado exitosamente
            para nuestros clientes.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeFilter === filter.value
                  ? "bg-primary text-secondary"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all"
            >
              {/* Image placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-secondary to-secondary-light relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white/80">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1}
                      stroke="currentColor"
                      className="w-16 h-16 mx-auto mb-2 opacity-50"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                      />
                    </svg>
                    <span className="text-sm">Imagen del proyecto</span>
                  </div>
                </div>
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-secondary text-xs font-bold px-3 py-1 rounded-full capitalize">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            ¿Quieres ver tu proyecto aquí? Contáctanos y hagámoslo realidad.
          </p>
          <a href="#contacto" className="btn-primary inline-block">
            Solicitar Cotización
          </a>
        </div>
      </div>
    </section>
  );
}
