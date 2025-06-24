const About = () => {
  return (
    <section
      id="about"
      className=" px-2 py-16 md:py-24 bg-gray-50 flex justify-center"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/logo.png"
              alt="AT Climatização technician"
              width={800}
              height={200}
              className="rounded-lg shadow-md object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Sobre AT Climatização
            </h2>
            <p className="text-lg text-muted-foreground mb-6"></p>
            <p className="text-lg text-muted-foreground mb-6  text-justify">
              Profissional especializado em ar-condicionado, com foco em
              qualidade, capricho e respeito ao ambiente do cliente. Realiza
              cada serviço com extrema atenção aos detalhes, garantindo um
              trabalho minucioso, eficiente e sem sujeira. Preza pela
              pontualidade, discrição e cuidado em cada etapa — desde a
              instalação até a manutenção. Atua sempre com seriedade, para
              preservar o local e entregando um resultado limpo, seguro e
              confiável.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
