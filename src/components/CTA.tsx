import { Button } from "./ui/button";

const Cta = () => {
  return (
    <section className="bg-sky-600 py-16 flex justify-center">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-white max-w-xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Pronto para um ambiente confortável?{" "}
            </h2>
            <p className="mt-4 text-sky-100 text-lg">
              Entre em contato conosco hoje mesmo para agendar um serviço ou
              obter um orçamento gratuito para suas necessidades de ar
              condicionado.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-white cursor-pointer text-sky-600 hover:bg-sky-50"
            >
              Agendar serviço
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-sky-600 border-white cursor-pointer"
            >
              Solicitar orçamento
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
