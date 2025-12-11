import Image from "next/image";

const services = [
  {
    title: "Reparación de Techos",
    description:
      "Solucionamos filtraciones, goteras y daños en todo tipo de techos. Diagnóstico preciso y reparación duradera con materiales de primera calidad.",
    image: "/services/reparacion.jpg",
  },
  {
    title: "Mantención de Techos",
    description:
      "Programa de mantención preventiva para extender la vida útil de tu techo. Limpieza, impermeabilización y revisión periódica.",
    image: "/services/mantencion.jpg",
  },
  {
    title: "Construcción de Techos",
    description:
      "Diseño y construcción de techos nuevos para residencias, edificios e industrias. Utilizamos los mejores materiales importados.",
    image: "/services/construccion.jpg",
  },
  {
    title: "Pintura de Fachadas",
    description:
      "Renovamos el exterior de tu propiedad con pinturas de alta resistencia. Preparación profesional de superficies y acabados duraderos.",
    image: "/services/pintura.jpg",
  },
];

const clientTypes = [
  {
    title: "Residencial",
    description: "Casas y departamentos",
    icon: "🏠",
  },
  {
    title: "Comercial",
    description: "Edificios y oficinas",
    icon: "🏢",
  },
  {
    title: "Industrial",
    description: "Galpones, bodegas y fábricas",
    icon: "🏭",
  },
  {
    title: "Constructoras",
    description: "Proyectos B2B",
    icon: "🏗️",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="section-padding bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Nuestros Servicios
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-secondary">
            Soluciones Completas para tu Techo
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Ofrecemos servicios integrales de techos con los más altos
            estándares de calidad y materiales premium importados.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Client types */}
        <div className="bg-secondary rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
            Atendemos Todo Tipo de Proyectos
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {clientTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors"
              >
                <div className="text-4xl mb-3">{type.icon}</div>
                <h4 className="text-lg font-semibold text-white">
                  {type.title}
                </h4>
                <p className="text-gray-300 text-sm mt-1">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
