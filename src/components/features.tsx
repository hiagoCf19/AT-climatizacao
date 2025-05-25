import { Clock, ThermometerSun, CheckCircle2 } from "lucide-react";

const Features = () => {
  return (
    <section className="bg-sky-50 py-12 md:pt-[100px] sm:pt-[100px]   flex justify-center">
      <div className="container px-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-4 md:gap-8">
          <div className="bg-white p-6  rounded-lg shadow-sm flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-sky-100 flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-sky-600" />
            </div>
            <h3 className="text-lg font-medium mb-2">
              24/7 Serviços de emergência
            </h3>
            <p className="text-muted-foreground">
              Disponível 24 horas para suas necessidades emergenciais de ar
              condicionado.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-sky-100 flex items-center justify-center mb-4">
              <CheckCircle2 className="h-6 w-6 text-sky-600" />
            </div>
            <h3 className="text-lg font-medium mb-2">Serviço qualificado</h3>
            <p className="text-muted-foreground">
              Nossa equipe é formada por profissionais altamente treinados e
              qualificados.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-sky-100 flex items-center justify-center mb-4">
              <ThermometerSun className="h-6 w-6 text-sky-600" />
            </div>
            <h3 className="text-lg font-medium mb-2">Satisfação garantida</h3>
            <p className="text-muted-foreground">
              Não ficaremos satisfeitos até que você se sinta confortável com
              nosso serviço.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
