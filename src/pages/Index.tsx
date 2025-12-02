import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  const features = [
    {
      icon: "Shield",
      title: "Гарантия 12 лет",
      description: "Официальная гарантия на все виды работ и материалы"
    },
    {
      icon: "Clock",
      title: "Монтаж за 1 день",
      description: "Быстрая установка без грязи и пыли"
    },
    {
      icon: "Award",
      title: "Премиум качество",
      description: "Европейские материалы от ведущих производителей"
    },
    {
      icon: "Ruler",
      title: "Бесплатный замер",
      description: "Выезд специалиста и расчет стоимости"
    }
  ];

  const benefits = [
    {
      icon: "CheckCircle2",
      title: "5000+ проектов",
      description: "Реализовано за 15 лет работы"
    },
    {
      icon: "Users",
      title: "50+ мастеров",
      description: "Опытная команда профессионалов"
    },
    {
      icon: "ThumbsUp",
      title: "98% довольных",
      description: "Клиентов рекомендуют нас"
    },
    {
      icon: "BadgeCheck",
      title: "Сертификаты",
      description: "Все необходимые документы"
    }
  ];

  const popularServices = [
    {
      title: "Глянцевые потолки",
      price: "от 450 ₽/м²",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80"
    },
    {
      title: "Матовые потолки",
      price: "от 380 ₽/м²",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80"
    },
    {
      title: "Многоуровневые",
      price: "от 650 ₽/м²",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-secondary via-secondary/95 to-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/20 text-white border-white/20 animate-fade-in">
              ✨ Скидка 15% на все виды потолков в декабре
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
              Натяжные потолки<br />премиум качества
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              Создаем идеальные интерьеры с гарантией 12 лет.<br />
              Монтаж за 1 день без грязи и пыли.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <Link to="/calculator">
                <Button size="lg" className="bg-white text-secondary hover:bg-gray-100 text-lg px-8">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
                <Icon name="Phone" size={20} className="mr-2" />
                Заказать звонок
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={feature.icon} className="text-primary" size={32} />
                  </div>
                  <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">Популярные услуги</h2>
            <p className="text-xl text-muted-foreground">Выберите идеальный вариант для вашего дома</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {popularServices.map((service, index) => (
              <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-2xl mb-2">{service.title}</h3>
                  <p className="text-3xl font-bold text-primary mb-4">{service.price}</p>
                  <Button className="w-full">Подробнее</Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center animate-fade-in-up">
            <Link to="/services">
              <Button size="lg" variant="outline">Все услуги</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">Почему выбирают нас</h2>
            <p className="text-xl text-muted-foreground">15 лет на рынке натяжных потолков</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={benefit.icon} className="text-primary" size={40} />
                </div>
                <h3 className="font-bold text-2xl mb-2 text-secondary">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto text-center animate-scale-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Готовы преобразить ваш дом?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Закажите бесплатную консультацию прямо сейчас и получите дизайн-проект в подарок
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-8">
              Получить консультацию
            </Button>
            <Link to="/calculator">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
                Рассчитать стоимость
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
