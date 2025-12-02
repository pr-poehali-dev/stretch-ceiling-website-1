import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Главная", path: "/" },
    { name: "Услуги", path: "/services" },
    { name: "Калькулятор", path: "/calculator" },
    { name: "Галерея", path: "/gallery" },
    { name: "Блог", path: "/blog" },
    { name: "Контакты", path: "/contact" }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-secondary">
            <Icon name="Sparkles" className="text-primary" size={32} />
            <span>Натяжные потолки Белореченск</span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors hover:text-primary ${
                  isActive(link.path) ? "text-primary" : "text-gray-700"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+74951234567" className="flex items-center gap-2 text-secondary font-semibold">
              <Icon name="Phone" size={20} />
              <span>+7 (495) 123-45-67</span>
            </a>
            <Button>Заказать звонок</Button>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <Icon name={isOpen ? "X" : "Menu"} size={28} />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t animate-fade-in">
          <div className="container mx-auto px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 font-medium transition-colors ${
                  isActive(link.path) ? "text-primary" : "text-gray-700"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3 border-t space-y-3">
              <a
                href="tel:+74951234567"
                className="flex items-center gap-2 text-secondary font-semibold"
              >
                <Icon name="Phone" size={20} />
                <span>+7 (495) 123-45-67</span>
              </a>
              <Button className="w-full">Заказать звонок</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;