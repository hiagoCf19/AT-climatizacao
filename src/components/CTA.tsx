import { Button } from "./ui/button";

const Cta = () => {
  return (
    <section className="bg-sky-600 md:py-16 py-8 flex justify-center">
      <div className="container px-2">
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
          <div className="flex  gap-4">
            <Button
              size="lg"
              className="bg-white cursor-pointer text-sky-600 hover:bg-sky-50"
            >
              <a
                target="_blank"
                href="https://api.whatsapp.com/send/?phone=554791684583&text&type=phone_number&app_absent=0"
              >
                Agendar serviço
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-sky-600 border-white cursor-pointer"
            >
              <a
                target="_blank"
                href="https://api.whatsapp.com/send/?phone=554791684583&text&type=phone_number&app_absent=0"
              >
                Solicitar orçamento
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
