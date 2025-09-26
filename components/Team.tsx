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
    <section id="equipo" className="bg-white section-padding">
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-sa-ink mb-6">
              {team.title}
            </h2>
            <p className="text-xl text-sa-ink/80 max-w-3xl mx-auto">
              {team.subtitle}
            </p>
          </div>

          {/* Directorio */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-sa-ink mb-8 text-center">
              Directorio
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {team.directorio.map((person, index) => (
                <div key={index} className="text-center">
                  {/* Placeholder redondo */}
                  <div className="w-24 h-24 bg-gradient-to-br from-sa-primary to-sa-accent rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">
                      {person.initials}
                    </span>
                  </div>
                  {/* Nombre y título */}
                  <h4 className="text-lg font-bold text-sa-ink mb-2">
                    {person.name}
                  </h4>
                  <p className="text-sm text-sa-ink/70">{person.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Equipo */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-sa-ink mb-8 text-center">
              Equipo
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {team.equipo.map((person, index) => (
                <div key={index} className="text-center">
                  {/* Placeholder redondo */}
                  <div className="w-32 h-32 bg-gradient-to-br from-sa-accent to-sa-primary rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-2xl">
                      {person.initials}
                    </span>
                  </div>
                  {/* Nombre y título */}
                  <h4 className="text-xl font-bold text-sa-ink mb-3">
                    {person.name}
                  </h4>
                  <p className="text-sa-ink/70">{person.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Propósito */}
          <div className="bg-sa-cloud/50 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-sa-ink mb-6 text-center">
              Propósito
            </h3>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-sa-ink/80 leading-relaxed text-center">
                Nuestro propósito es transformar territorios andinos a través
                del desarrollo regenerativo, combinando sabiduría ancestral con
                innovación moderna. Trabajamos para crear un futuro donde las
                comunidades prosperen en armonía con su entorno, generando
                oportunidades equitativas y sostenibles que honren la herencia
                cultural y natural de los Andes.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
