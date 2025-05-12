import { Button } from "./components/ui/button";

const Home = () => {
  return (
    <section id="home" className="relative">
      <div className="absolute inset-0 z-0">
        <img
          //src="/placeholder.svg?height=800&width=1920"
          src="/ar.jpg"
          alt="Air conditioning technician"
          className="object-cover brightness-[0.7] w-full max-h-[800px]"
        />
      </div>
      <div className="mb-[200px] container relative z-10 py-24 md:py-32 lg:py-40  mx-auto">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Serviços profissionais de ar condicionado
          </h1>
          <p className="mt-6 text-lg md:text-xl">
            Serviços especializados de instalação, manutenção e reparo para
            todas as suas necessidades de ar condicionado. Mantendo seu conforto
            o ano todo.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-sky-600 hover:bg-sky-700">
              Agendar serviço
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 cursor-pointer text-white border-white hover:bg-white/20 "
            >
              Saiba mais
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
