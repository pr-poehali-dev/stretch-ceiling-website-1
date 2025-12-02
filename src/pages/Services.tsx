import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      title: "Глянцевые потолки",
      description: "Идеальное решение для визуального увеличения пространства. Создают эффект зеркала и добавляют света в помещение.",
      price: "от 450 ₽/м²",
      features: ["Эффект зеркала", "Визуальное увеличение", "Легкая уборка", "Водостойкость"],
      icon: "Sparkles"
    },
    {
      title: "Матовые потолки",
      description: "Классический вариант для любого интерьера. Создают уютную атмосферу и скрывают мелкие неровности базового потолка.",
      price: "от 380 ₽/м²",
      features: ["Классический вид", "Скрывают дефекты", "Не бликуют", "Универсальность"],
      icon: "Circle"
    },
    {
      title: "Сатиновые потолки",
      description: "Оптимальное сочетание глянца и матовости. Обладают легким перламутровым блеском и благородным видом.",
      price: "от 420 ₽/м²",
      features: ["Перламутровый блеск", "Элегантность", "Отражение света", "Премиум вид"],
      icon: "Star"
    },
    {
      title: "Многоуровневые потолки",
      description: "Дизайнерские решения для создания уникального интерьера. Зонирование пространства и встроенная подсветка.",
      price: "от 650 ₽/м²",
      features: ["Уникальный дизайн", "Зонирование", "Встроенная подсветка", "Объемность"],
      icon: "Layers"
    },
    {
      title: "Фотопечать",
      description: "Превратите потолок в произведение искусства. Любые изображения высокого качества на выбор.",
      price: "от 800 ₽/м²",
      features: ["Любые изображения", "HD качество", "Защита от выцветания", "Уникальность"],
      icon: "Image"
    },
    {
      title: "Резные потолки Apply",
      description: "Эксклюзивные перфорированные потолки с подсветкой. Создают эффект объема и 3D рисунка.",
      price: "от 1200 ₽/м²",
      features: ["3D эффект", "Перфорация", "Внутренняя подсветка", "Эксклюзив"],
      icon: "Gem"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl font-bold mb-4 text-secondary">Наши услуги</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Широкий выбор натяжных потолков для любого интерьера и бюджета
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name={service.icon} className="text-primary" size={32} />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-base mt-2">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <p className="text-3xl font-bold text-primary">{service.price}</p>
                </div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <Icon name="Check" className="text-primary" size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full">Заказать</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-secondary text-white rounded-2xl p-12 text-center animate-scale-in">
          <h2 className="text-3xl font-bold mb-4">Не нашли подходящий вариант?</h2>
          <p className="text-xl mb-6 opacity-90">
            Мы разработаем индивидуальное решение специально для вас
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-secondary hover:bg-gray-100">
            Связаться с нами
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;
