import { Phone, Snowflake, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 flex items-center justify-center">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Snowflake className="h-8 w-8 text-sky-600" />
          <span className="text-xl font-bold">AT Climatização</span>
        </div>

        <nav className="hidden md:flex gap-6">
          <a
            href="#home"
            className="text-sm font-medium hover:text-sky-600 transition-colors"
          >
            Inicio
          </a>
          <a
            href="#services"
            className="text-sm font-medium hover:text-sky-600 transition-colors"
          >
            Serviços
          </a>
          <a
            href="#about"
            className="text-sm font-medium hover:text-sky-600 transition-colors"
          >
            Sobre
          </a>
          <a
            href="#testimonials"
            className="text-sm font-medium hover:text-sky-600 transition-colors"
          >
            Avaliações
          </a>
          <a
            href="#contact"
            className="text-sm font-medium hover:text-sky-600 transition-colors"
          >
            Contato
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-sky-600" />
            <span className="text-sm font-medium">+55 (47) 99168-4583</span>
          </div>
          <Button
            className="text-zinc-50 bg-sky-600 cursor-pointer hover:bg-sky-700"
            size="sm"
          >
            Solicitar serviços
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className=" md:hidden text-zinc-50 bg-sky-600 cursor-pointer hover:bg-sky-700"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
