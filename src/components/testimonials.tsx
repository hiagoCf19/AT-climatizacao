const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-16 md:py-24 flex justify-center px-2"
    >
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            O que nossos clientes dizem?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Não acredite apenas na nossa palavra. Veja o que nossos clientes
            satisfeitos têm a dizer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          <div className="bg-white p-6 rounded-lg shadow border">
            <div className="flex items-center gap-1 text-amber-400 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <p className="italic mb-4">
              "O técnico da AT Climatização foi profissional, experiente e
              consertou nosso ar condicionado rapidamente. Ótimo serviço a um
              preço justo!"
            </p>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                <img src="" alt="" />
              </div>
              <div>
                <h4 className="font-medium">Samara Seguetto</h4>
                <p className="text-sm text-muted-foreground">
                  Balneário Camboriú
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow border">
            <div className="flex items-center gap-1 text-amber-400 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <p className="italic mb-4">
              "Utilizamos a AT Climatização para a manutenção do nosso prédio de
              escritórios.Sempre confiável e realiza um trabalho excelente."
            </p>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-sm font-medium">AS</span>
              </div>
              <div>
                <h4 className="font-medium">Ana Silva</h4>
                <p className="text-sm text-muted-foreground">Itajaí-SC</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow border">
            <div className="flex items-center gap-1 text-amber-400 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <p className="italic mb-4">
              "Liguei para um reparo de emergência e ele chegou em minha casa em
              poucas horas. O técnico foi simpático e resolveu o problema
              rapidamente. Recomendo muito!"
            </p>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-sm font-medium">CP</span>
              </div>
              <div>
                <h4 className="font-medium">Carlos Pereira</h4>
                <p className="text-sm text-muted-foreground">
                  Balneário Camboriu SC
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
