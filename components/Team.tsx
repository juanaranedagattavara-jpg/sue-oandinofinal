import Container from './Container';

/**
 * Componente Team con directorio y equipo
 * Muestra placeholders redondos con nombres y títulos
 */
export default function Team() {
  const team = {
    title: 'Nuestro Equipo',
    subtitle: 'Conoce a las personas que hacen posible nuestro impacto',
    directorio: [
      {
        name: 'María Elena Quispe',
        title: 'Directora Ejecutiva',
        initials: 'MQ',
      },
      { name: 'Carlos Mamani', title: 'Director de Programas', initials: 'CM' },
      {
        name: 'Ana Condori',
        title: 'Coordinadora de Educación',
        initials: 'AC',
      },
      {
        name: 'Roberto Huamán',
        title: 'Especialista en Desarrollo Territorial',
        initials: 'RH',
      },
      {
        name: 'Lucía Vargas',
        title: 'Coordinadora de Comunidades',
        initials: 'LV',
      },
      { name: 'Diego Paredes', title: 'Director de Finanzas', initials: 'DP' },
    ],
    equipo: [
      {
        name: 'Sofia Mendoza',
        title: 'Coordinadora de Proyectos',
        initials: 'SM',
      },
      {
        name: 'Miguel Torres',
        title: 'Facilitador Comunitario',
        initials: 'MT',
      },
      {
        name: 'Elena Rojas',
        title: 'Especialista en Sostenibilidad',
        initials: 'ER',
      },
    ],
  };

  return (
    <section id="equipo" className="bg-white section-padding no-scroll-x">
      <Container>
        <div className="max-w-6xl mx-auto no-scroll-x">
          {/* Header */}
          <div className="text-center mb-16 px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-sa-ink mb-6">
              {team.title}
            </h2>
            <p className="text-xl text-sa-ink/80 max-w-3xl mx-auto">
              {team.subtitle}
            </p>
          </div>

          {/* Directorio */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-sa-ink mb-8 text-center px-4">
              Directorio
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 px-4">
              {team.directorio.map((person, index) => (
                <div key={index} className="text-center">
                  {/* Placeholder redondo */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-sa-primary to-sa-accent rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-sm sm:text-lg md:text-xl">
                      {person.initials}
                    </span>
                  </div>
                  {/* Nombre y título */}
                  <h4 className="text-sm sm:text-base md:text-lg font-bold text-sa-ink mb-1 sm:mb-2 leading-tight">
                    {person.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-sa-ink/70 leading-tight">
                    {person.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Equipo */}
          <div>
            <h3 className="text-2xl font-bold text-sa-ink mb-8 text-center px-4">
              Equipo
            </h3>
            <div className="flex justify-center gap-1 sm:gap-3 md:gap-6 max-w-full mx-auto px-4 no-scroll-x">
              {team.equipo.map((person, index) => (
                <div
                  key={index}
                  className="text-center min-w-[70px] sm:min-w-[100px] md:min-w-[130px] flex-shrink-0 max-w-[90px] sm:max-w-[140px] md:max-w-[180px]"
                >
                  {/* Placeholder redondo */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 bg-gradient-to-br from-sa-accent to-sa-primary rounded-full mx-auto mb-2 sm:mb-3 md:mb-4 flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-sm sm:text-lg md:text-xl">
                      {person.initials}
                    </span>
                  </div>
                  {/* Nombre y título */}
                  <h4 className="text-xs sm:text-sm md:text-lg font-bold text-sa-ink mb-1 sm:mb-2 leading-tight line-clamp-2">
                    {person.name}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-sa-ink/70 leading-tight line-clamp-2">
                    {person.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
