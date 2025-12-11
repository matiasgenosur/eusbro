const guarantees = [
  {
    title: "Garantía General",
    duration: "18 meses",
    description:
      "Para todos nuestros proyectos de reparación y mantención de techos existentes.",
    features: [
      "Cobertura por filtraciones",
      "Reparación de materiales defectuosos",
      "Mano de obra incluida",
      "Sin costo adicional",
    ],
    highlighted: false,
  },
  {
    title: "Garantía Obras Nuevas",
    duration: "3 años",
    description:
      "Para construcción de techos nuevos y proyectos de gran envergadura.",
    features: [
      "Cobertura completa",
      "Materiales premium importados",
      "Seguimiento post-instalación",
      "Certificado de garantía",
    ],
    highlighted: true,
  },
];

const benefits = [
  {
    title: "Materiales Certificados",
    description: "Importados de Italia y EE.UU. con certificación de calidad.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
        />
      </svg>
    ),
  },
  {
    title: "Hidrófugos",
    description: "Protección total contra la humedad y filtraciones de agua.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
        />
      </svg>
    ),
  },
  {
    title: "Resistencia UV",
    description: "Materiales que no se degradan con la exposición solar.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
        />
      </svg>
    ),
  },
  {
    title: "Larga Vida Útil",
    description: "Techos diseñados para durar décadas sin mantenimiento mayor.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    ),
  },
];

export default function Guarantee() {
  return (
    <section id="garantia" className="section-padding bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Nuestra Garantía
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-secondary">
            Respaldamos Nuestro Trabajo
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Confiamos en la calidad de nuestros materiales y mano de obra. Por
            eso ofrecemos garantías que respaldan cada proyecto.
          </p>
        </div>

        {/* Guarantee cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20 max-w-4xl mx-auto">
          {guarantees.map((guarantee, index) => (
            <div
              key={index}
              className={`rounded-3xl p-8 ${
                guarantee.highlighted
                  ? "bg-secondary text-white ring-4 ring-primary"
                  : "bg-white border border-gray-200"
              }`}
            >
              {guarantee.highlighted && (
                <span className="inline-block bg-primary text-secondary text-xs font-bold px-3 py-1 rounded-full mb-4">
                  RECOMENDADO
                </span>
              )}
              <h3
                className={`text-2xl font-bold mb-2 ${
                  guarantee.highlighted ? "text-white" : "text-secondary"
                }`}
              >
                {guarantee.title}
              </h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span
                  className={`text-5xl font-bold ${
                    guarantee.highlighted ? "text-primary" : "text-primary"
                  }`}
                >
                  {guarantee.duration}
                </span>
              </div>
              <p
                className={`mb-6 ${
                  guarantee.highlighted ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {guarantee.description}
              </p>
              <ul className="space-y-3">
                {guarantee.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className={`w-5 h-5 ${
                        guarantee.highlighted ? "text-primary" : "text-primary"
                      }`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                    <span
                      className={
                        guarantee.highlighted ? "text-gray-200" : "text-gray-700"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="bg-white rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-secondary text-center mb-8">
            ¿Por qué nuestros materiales son mejores?
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h4 className="font-semibold text-secondary mb-2">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
