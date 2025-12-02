import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const stats = [
    { value: "15+", label: "Лет на рынке", icon: "Calendar" },
    { value: "5000+", label: "Проектов выполнено", icon: "CheckCircle2" },
    { value: "98%", label: "Довольных клиентов", icon: "ThumbsUp" },
    { value: "50+", label: "Мастеров в команде", icon: "Users" }
  ];

  const values = [
    {
      title: "Качество",
      description: "Используем только премиальные материалы от ведущих европейских производителей",
      icon: "Award"
    },
    {
      title: "Надежность",
      description: "Даем гарантию 12 лет на все виды работ и материалы",
      icon: "Shield"
    },
    {
      title: "Профессионализм",
      description: "Наши мастера регулярно проходят обучение и сертификацию",
      icon: "GraduationCap"
    },
    {
      title: "Скорость",
      description: "Монтаж любой сложности за 1 день без грязи и пыли",
      icon: "Zap"
    }
  ];

  const team = [
    {
      name: "Александр Петров",
      position: "Основатель и директор",
      experience: "15 лет в отрасли",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80"
    },
    {
      name: "Мария Соколова",
      position: "Главный дизайнер",
      experience: "12 лет опыта",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80"
    },
    {
      name: "Дмитрий Иванов",
      position: "Технический директор",
      experience: "10 лет в компании",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80"
    },
    {
      name: "Екатерина Волкова",
      position: "Менеджер проектов",
      experience: "8 лет опыта",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl font-bold mb-4 text-secondary">О компании</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Мы создаем идеальные потолки для вашего дома уже более 15 лет
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center animate-fade-in-up hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={stat.icon} className="text-primary" size={32} />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mb-20 animate-fade-in-up">
          <h2 className="text-3xl font-bold mb-6 text-center text-secondary">Наша история</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg leading-relaxed mb-4">
              Компания основана в 2009 году группой энтузиастов, влюбленных в свое дело. 
              Начав с небольшой мастерской и команды из 3 человек, мы выросли в одну из 
              ведущих компаний по установке натяжных потолков в регионе.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              За эти годы мы выполнили более 5000 проектов - от небольших квартир до 
              масштабных коммерческих объектов. Каждый проект для нас уникален, и мы 
              подходим к каждому заказу с максимальной ответственностью.
            </p>
            <p className="text-lg leading-relaxed">
              Наша миссия - делать пространства красивыми и комфортными, используя 
              передовые технологии и экологичные материалы. Мы гордимся тем, что 98% 
              наших клиентов рекомендуют нас своим друзьям и знакомым.
            </p>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-secondary">Наши ценности</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="animate-fade-in-up hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={value.icon} className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center text-secondary">Наша команда</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-semibold mb-1">{member.position}</p>
                <Badge variant="outline">{member.experience}</Badge>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary to-primary/80 text-white rounded-2xl p-12 text-center animate-scale-in">
          <h2 className="text-3xl font-bold mb-4">Готовы преобразить ваш дом?</h2>
          <p className="text-xl mb-6 opacity-90 max-w-2xl mx-auto">
            Закажите бесплатную консультацию, и наш специалист приедет к вам для замера и расчета стоимости
          </p>
          <button className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
            Получить консультацию
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
