import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

const Contact = () => {
  const contacts = [
    {
      icon: "Phone",
      title: "Телефон",
      value: "+7 (495) 123-45-67",
      subtitle: "Ежедневно с 9:00 до 21:00"
    },
    {
      icon: "Mail",
      title: "Email",
      value: "info@ceiling-expert.ru",
      subtitle: "Ответим в течение часа"
    },
    {
      icon: "MapPin",
      title: "Адрес",
      value: "г. Москва, ул. Примерная, д. 123",
      subtitle: "Офис и шоу-рум"
    },
    {
      icon: "Clock",
      title: "Время работы",
      value: "Пн-Вс: 9:00 - 21:00",
      subtitle: "Без выходных"
    }
  ];

  const socialLinks = [
    { icon: "MessageCircle", name: "WhatsApp", color: "text-green-600" },
    { icon: "Send", name: "Telegram", color: "text-blue-500" },
    { icon: "Instagram", name: "Instagram", color: "text-pink-600" },
    { icon: "Facebook", name: "Facebook", color: "text-blue-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl font-bold mb-4 text-secondary">Контакты</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Свяжитесь с нами удобным способом - мы всегда готовы помочь
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="space-y-6">
            <Card className="animate-fade-in-up">
              <CardHeader>
                <CardTitle className="text-2xl">Отправьте заявку</CardTitle>
                <CardDescription>Мы свяжемся с вами в течение 15 минут</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input id="name" placeholder="Иван Иванов" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="ivan@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea
                      id="message"
                      placeholder="Расскажите о вашем проекте..."
                      rows={5}
                    />
                  </div>
                  <Button className="w-full" size="lg">
                    Отправить заявку
                  </Button>
                  <p className="text-sm text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>

            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              {socialLinks.map((social, index) => (
                <button
                  key={index}
                  className="flex items-center gap-2 px-4 py-3 bg-white rounded-lg border hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon name={social.icon} className={social.color} size={24} />
                  <span className="font-semibold">{social.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {contacts.map((contact, index) => (
              <Card
                key={index}
                className="animate-fade-in-up hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="flex items-start gap-4 pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name={contact.icon} className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{contact.title}</h3>
                    <p className="text-xl font-bold text-primary mb-1">{contact.value}</p>
                    <p className="text-sm text-muted-foreground">{contact.subtitle}</p>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-4">Как нас найти</h3>
                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.4266989993!2d37.61756231593454!3d55.75393998055647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2z0JrRgNCw0YHQvdCw0Y8g0L_Qu9C-0YnQsNC00Yw!5e0!3m2!1sru!2sru!4v1635789123456!5m2!1sru!2sru"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Карта офиса"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 animate-fade-in-up">
          <Card className="bg-primary/5">
            <CardContent className="pt-6 text-center">
              <Icon name="Headphones" className="text-primary mx-auto mb-3" size={32} />
              <h3 className="font-bold text-lg mb-2">Бесплатная консультация</h3>
              <p className="text-sm text-muted-foreground">
                Ответим на все вопросы и поможем с выбором
              </p>
            </CardContent>
          </Card>
          <Card className="bg-primary/5">
            <CardContent className="pt-6 text-center">
              <Icon name="Ruler" className="text-primary mx-auto mb-3" size={32} />
              <h3 className="font-bold text-lg mb-2">Бесплатный замер</h3>
              <p className="text-sm text-muted-foreground">
                Выезд специалиста в удобное для вас время
              </p>
            </CardContent>
          </Card>
          <Card className="bg-primary/5">
            <CardContent className="pt-6 text-center">
              <Icon name="FileText" className="text-primary mx-auto mb-3" size={32} />
              <h3 className="font-bold text-lg mb-2">Договор и гарантия</h3>
              <p className="text-sm text-muted-foreground">
                Официальное оформление и 12 лет гарантии
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
