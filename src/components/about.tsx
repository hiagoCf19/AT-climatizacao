import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
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
              src="/placeholder.svg?height=600&width=800"
              alt="AT Climatização technician"
              width={600}
              height={400}
              className="rounded-lg shadow-md object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Sobre AT Climatização
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Com mais de XX anos de experiência no setor, a AT Climatização tem
              fornecido serviços de ar condicionado de alta qualidade para
              clientes residenciais e comerciais.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Técnicos certificados estão comprometidos em oferecer um serviço
              excepcional, garantindo seu conforto em qualquer estação. Nos
              orgulhamos de nossa atenção aos detalhes, confiabilidade e
              satisfação do cliente.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-sky-600" />
                <span>XX+ Anos de experiência</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-sky-600" />
                <span>Certificados técnicos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-sky-600" />
                <span>Garantia de serviço</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-sky-600" />
                <span>Preço competitivo</span>
              </div>
            </div>
            <Button className="bg-sky-600 hover:bg-sky-700">
              Saiba mais sobre nós
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
