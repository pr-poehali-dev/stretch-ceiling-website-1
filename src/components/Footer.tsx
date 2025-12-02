import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 text-2xl font-bold mb-4">
              <Icon name="Sparkles" className="text-primary" size={28} />
              <span>SkyLine</span>
            </div>
            <p className="text-white/80 mb-4">
              Профессиональный монтаж натяжных потолков с гарантией 12 лет
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Icon name="MessageCircle" size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Icon name="Send" size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-primary transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-primary transition-colors">
                  Услуги
                </Link>
              </li>
              <li>
                <Link to="/calculator" className="text-white/80 hover:text-primary transition-colors">
                  Калькулятор
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-white/80 hover:text-primary transition-colors">
                  Галерея
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/80 hover:text-primary transition-colors">
                  Блог
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Информация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-white/80 hover:text-primary transition-colors">
                  О компании
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-primary transition-colors">
                  Контакты
                </Link>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-primary transition-colors">
                  Гарантия
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-primary transition-colors">
                  Отзывы
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-primary transition-colors">
                  Политика конфиденциальности
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-white/80">
                <Icon name="Phone" size={20} className="flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+74951234567" className="hover:text-primary transition-colors">
                    +7 (495) 123-45-67
                  </a>
                  <p className="text-sm">Ежедневно 9:00 - 21:00</p>
                </div>
              </li>
              <li className="flex items-start gap-2 text-white/80">
                <Icon name="Mail" size={20} className="flex-shrink-0 mt-0.5" />
                <a href="mailto:info@ceiling-expert.ru" className="hover:text-primary transition-colors">
                  info@ceiling-expert.ru
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/80">
                <Icon name="MapPin" size={20} className="flex-shrink-0 mt-0.5" />
                <span>г. Москва, ул. Примерная, д. 123</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">
          <p>© {currentYear} SkyLine. Все права защищены.</p>
          <p>Сделано с ❤️ для идеальных потолков</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
