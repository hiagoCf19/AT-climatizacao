import { Phone, Snowflake, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 flex justify-center px-2">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Snowflake className="h-8 w-8 text-sky-400" />
              <span className="text-xl font-bold text-white">
                AT Climatização
              </span>
            </div>
            <p className="mb-4">
              Serviços profissionais de ar condicionado para propriedades
              residenciais e comerciais.
            </p>
            <div className="flex gap-4">
              {/*  <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a> */}
              <a
                href="https://www.instagram.com/atclimatizacao_?igsh=MXFqeXJneWtueWpuYw%3D%3D"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              {/*  <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a> */}
            </div>
          </div>

          <div className=" flex w-full">
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-4 text-white">
                Serviços
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Instalação
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Limpeza
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Manutenção
                  </a>
                </li>
                {/*  <li>
                <a href="#" className="hover:text-white transition-colors">
                
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Emergency Services
                </a>
              </li> */}
              </ul>
            </div>

            <div className="flex-1 flex flex-col">
              <h3 className="text-lg font-semibold mb-4 text-white">
                Navegação
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#about"
                    className="hover:text-white transition-colors"
                  >
                    Sobre nós
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="hover:text-white transition-colors"
                  >
                    Avaliações
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
                    Serviços
                  </a>
                </li>
                {/*  <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li> */}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contato</h3>
            <ul className="space-y-3">
              {/*  <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-sky-400 flex-shrink-0 mt-0.5" />
                <span>Av. Paulista, 1000, São Paulo, SP, Brazil</span>
              </li> */}
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-sky-400 flex-shrink-0 mt-0.5" />
                <span>+55 (47) 99168-4583</span>
              </li>
              {/*  <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-sky-400 flex-shrink-0 mt-0.5" />
                <span>contato@atclimatizacao.com</span>
              </li> */}
              {/* <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-sky-400 flex-shrink-0 mt-0.5" />
                <span>Mon-Fri: 8AM-6PM, Sat: 9AM-2PM</span>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="border-t text-center border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>
            &copy; {new Date().getFullYear()} AT Climatização. <br /> Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
