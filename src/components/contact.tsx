import { Button } from "./ui/button";
import { Phone, Mail } from "lucide-react";
const Contact = () => {
  return (
    <section id="contact" className="py-16 px-2  md:py-24 flex justify-center">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Contate-nos
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Tem dúvidas ou precisa agendar um serviço? Entre em contato
              conosco usando qualquer um dos métodos abaixo ou preenchendo o
              formulário de contato.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-sky-600" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Telefone</h3>
                  <p className="text-muted-foreground">+55 (47) 99168-4583</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-sky-600" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <p className="text-muted-foreground">
                    contato@atclimatizacao.com
                  </p>
                  <p className="text-muted-foreground">
                    suporte@atclimatizacao.com
                  </p>
                </div>
              </div>

              {/*  <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-sky-600" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Endereço</h3>
                  <p className="text-muted-foreground">Av. ABC, 1000</p>
                  <p className="text-muted-foreground">
                    Balneário Camboriú, SC, Brazil
                  </p>
                </div>
              </div> */}
            </div>
          </div>

          <div>
            <form className="space-y-6 bg-white p-8 rounded-lg shadow border">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="first-name" className="text-sm font-medium">
                    Nome
                  </label>
                  <input
                    id="first-name"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Insira seu nome"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="last-name" className="text-sm font-medium">
                    Sobrenome
                  </label>
                  <input
                    id="last-name"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Insira seu sobrenome"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Insira seu email"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Telefone
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Insira seu número de telefone"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium">
                  Serviço solicitado
                </label>
                <select
                  id="service"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="" disabled selected>
                    Selecione um serviço
                  </option>
                  <option value="installation">Instalação</option>
                  <option value="repair">Reparo</option>
                  <option value="maintenance">Manutenção</option>
                  <option value="consultation">Orçamento</option>
                  <option value="other">Outro</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Descreva sua solicitação ou dúvida"
                ></textarea>
              </div>

              <Button
                type="submit"
                className="w-full bg-sky-600 hover:bg-sky-700"
              >
                Enviar mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
