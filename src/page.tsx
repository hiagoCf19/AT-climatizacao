import { Button } from "./components/ui/button";

const Home = () => {
  return (
    <section id="home" className="relative">
      <div className="max-h-[220px] md:max-h-[800px] absolute inset-0 z-0">
        <img
          //src="/placeholder.svg?height=800&width=1920"
          src="/ar.jpg"
          alt="Air conditioning technician"
          className="object-cover brightness-[0.7] w-full max-h-[250px] md:max-h-[800px]"
        />
      </div>
      <div className="md:mb-[200px] sm:mb-[200px] container relative z-10 py-24 md:py-32 lg:py-40  mx-auto md:max-h-[800px] max-h-[220px] px-2">
        <div className="md:max-w-2xl -mt-20 md:-mt-20 sm:-mt-20  text-white">
          <h1 className="text-2xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Serviços profissionais de ar condicionado
          </h1>
          <p className="mt-6 text-sm md:text-xl">
            Serviços especializados de instalação, manutenção e reparo para
            todas as suas necessidades de ar condicionado. Mantendo seu conforto
            o ano todo.
          </p>
          <div className="md:mt-10 flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-sky-600 hover:bg-sky-700 hidden md:block sm:block"
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
              className="bg-white/10 cursor-pointer text-white border-white hover:bg-white/20 hidden md:block sm:block "
            >
              <a href="#about">Saiba mais</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
