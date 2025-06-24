import { Snowflake, Wind, Wrench, CheckCircle2 } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 px-2 flex justify-center">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Nossos serviços
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos soluções completas de ar condicionado para propriedades
            residenciais e comerciais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
            <div className="p-6">
              <Snowflake className="h-10 w-10 text-sky-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Instalação</h3>
              <p className="text-muted-foreground mb-4">
                Instalação profissional de sistemas de ar condicionado para
                residências e empresas.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Ar codicionado de Janela</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Ar condicionado-split</span>
                </li>
              </ul>
              {/* <a
                href="#"
                className="inline-flex items-center text-sky-600 text-sm font-medium hover:underline"
              >
                Ver mais <ArrowRight className="ml-1 h-4 w-4" />
              </a> */}
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
            <div className="p-6">
              <Wrench className="h-10 w-10 text-sky-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Reparos</h3>
              <p className="text-muted-foreground mb-4">
                Serviços de reparo rápidos e confiáveis ​​para todas as marcas e
                modelos de ar-condicionados.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Solução de problemas</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Troca de componentes</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Troca de peças</span>
                </li>
              </ul>
              {/* <a
                href="#"
                className="inline-flex items-center text-sky-600 text-sm font-medium hover:underline"
              >
                Ver mais <ArrowRight className="ml-1 h-4 w-4" />
              </a> */}
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
            <div className="p-6">
              <Wind className="h-10 w-10 text-sky-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Manutenção</h3>
              <p className="text-muted-foreground mb-4">
                Manutenção regular para manter seu sistema funcionando com
                eficiência e prevenir panes.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Limpeza e troca de filtro</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Inspeção de sistema</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Manutenção preventiva</span>
                </li>
              </ul>
              {/* <a
                href="#"
                className="inline-flex items-center text-sky-600 text-sm font-medium hover:underline"
              >
                Ver mais <ArrowRight className="ml-1 h-4 w-4" />
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
