import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  const services = [
    {
      icon: "Sparkles",
      title: "Глянцевые",
      description: "Зеркальный блеск и визуальное расширение пространства",
      price: "от 450₽",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80"
    },
    {
      icon: "Circle",
      title: "Матовые",
      description: "Классика и уют для любого интерьера",
      price: "от 380₽",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80"
    },
    {
      icon: "Layers",
      title: "Многоуровневые",
      description: "Дизайнерские решения с подсветкой",
      price: "от 650₽",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80"
    }
  ];

  const advantages = [
    { icon: "Timer", text: "Установка за 3-4 часа" },
    { icon: "ShieldCheck", text: "Гарантия 12 лет" },
    { icon: "Droplets", text: "Защита от протечек" },
    { icon: "Sparkles", text: "Без пыли и грязи" }
  ];

  const steps = [
    {
      number: "01",
      title: "Заявка",
      description: "Оставьте заявку или позвоните нам",
      icon: "Phone"
    },
    {
      number: "02",
      title: "Замер",
      description: "Бесплатный выезд мастера с образцами",
      icon: "Ruler"
    },
    {
      number: "03",
      title: "Монтаж",
      description: "Установка потолка за 1 день",
      icon: "Wrench"
    },
    {
      number: "04",
      title: "Гарантия",
      description: "12 лет официальной гарантии",
      icon: "Award"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50/30 to-white">
      <Navigation />
      
      <section className="relative pt-32 pb-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <Badge className="mb-6 bg-secondary/10 text-secondary border-secondary/20 text-base px-4 py-2">
                🎁 Скидка 20% до конца месяца
              </Badge>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Натяжные потолки<br />
                <span className="text-primary">в Белореченске</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Качественный монтаж от 380₽/м². Гарантия 12 лет.
                Более 500 довольных клиентов.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button size="lg" className="text-lg px-8 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Вызвать замерщика
                </Button>
                <Link to="/calculator">
                  <Button size="lg" variant="outline" className="text-lg px-8 border-2">
                    <Icon name="Calculator" size={20} className="mr-2" />
                    Рассчитать стоимость
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {advantages.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                    <Icon name={item.icon} className="text-primary" size={18} />
                    <span className="text-muted-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                  alt="Натяжные потолки"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 animate-scale-in" style={{ animationDelay: "400ms" }}>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Users" className="text-primary" size={28} />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">500+</div>
                    <div className="text-sm text-muted-foreground">довольных клиентов</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Популярные виды потолков</h2>
            <p className="text-xl text-muted-foreground">Выберите идеальный вариант для вашего дома</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-2 hover:border-primary hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="bg-white rounded-full p-3 shadow-lg">
                      <Icon name={service.icon} className="text-primary" size={24} />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-primary">{service.price}</span>
                    <span className="text-sm text-muted-foreground">/м²</span>
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in-up">
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-2">
                Смотреть все виды потолков
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Как мы работаем</h2>
            <p className="text-xl text-muted-foreground">Простой процесс от заявки до готового потолка</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-6">
                    <div className="text-6xl font-bold text-primary/10 mb-4">{step.number}</div>
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon name={step.icon} className="text-primary" size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <Icon name="ArrowRight" className="text-primary/30" size={32} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-br from-primary via-primary/95 to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-scale-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Готовы установить потолок мечты?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Оставьте заявку сейчас и получите скидку 20% + бесплатный дизайн-проект
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 shadow-xl">
                <Icon name="Phone" size={20} className="mr-2" />
                Позвонить нам
              </Button>
              <Link to="/calculator">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать цену
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
