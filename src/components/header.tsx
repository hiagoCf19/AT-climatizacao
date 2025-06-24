import {
  BadgeInfo,
  Home,
  Menu,
  Phone,
  PhoneOutgoing,
  Snowflake,
  Star,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 flex items-center justify-center px-4 md:px-0">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 text-zinc-800 text-lg">
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
          <div className="flex items-center gap-2 text-zinc-800 text-lg">
            <Phone className="h-4 w-4 text-sky-600" />
            <span className="text-sm font-medium">+55 (47) 99168-4583</span>
          </div>
          <Button
            className="text-zinc-50 bg-sky-600 cursor-pointer hover:bg-sky-700"
            size="sm"
          >
            <a
              href="https://api.whatsapp.com/send/?phone=554791684583&text&type=phone_number&app_absent=0"
              target="_blank"
            >
              Solicitar serviços
            </a>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger className="md:hidden">
            <Menu />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Navegação</SheetTitle>
              <SheetDescription>
                <ul className="w-full gap-4 flex flex-col py-8">
                  <li className="">
                    <a
                      href="#home"
                      className="flex items-center gap-2 text-zinc-800 text-lg"
                    >
                      <Home /> Inicio
                    </a>
                  </li>
                  <li className="flex items-center gap-2 text-zinc-800 text-lg">
                    <a
                      href="#services"
                      className="flex items-center gap-2 text-zinc-800 text-lg"
                    >
                      <Wrench /> Serviços
                    </a>
                  </li>
                  <li className="flex items-center gap-2 text-zinc-800 text-lg">
                    <a
                      href="#about"
                      className="flex items-center gap-2 text-zinc-800 text-lg"
                    >
                      <BadgeInfo /> Sobre nós
                    </a>
                  </li>
                  <li className="flex items-center gap-2 text-zinc-800 text-lg">
                    <a
                      href="#testimonials"
                      className="flex items-center gap-2 text-zinc-800 text-lg"
                    >
                      <Star /> Avaliações
                    </a>
                  </li>
                  <li className="flex items-center gap-2 text-zinc-800 text-lg">
                    <a
                      href="#contact"
                      className="flex items-center gap-2 text-zinc-800 text-lg"
                    >
                      <PhoneOutgoing />
                      Contatos
                    </a>
                  </li>
                </ul>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
