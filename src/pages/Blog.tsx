import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Blog = () => {
  const articles = [
    {
      title: "Как выбрать натяжной потолок: полное руководство 2024",
      excerpt: "Подробный гид по выбору натяжного потолка для вашего дома. Рассмотрим все типы, их преимущества и недостатки.",
      date: "15 ноября 2024",
      readTime: "8 мин",
      category: "Советы",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      views: 1245
    },
    {
      title: "Глянцевые vs матовые потолки: что лучше для вашей квартиры?",
      excerpt: "Сравниваем два популярных типа натяжных потолков. Плюсы, минусы и рекомендации по выбору для разных помещений.",
      date: "10 ноября 2024",
      readTime: "6 мин",
      category: "Сравнение",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
      views: 892
    },
    {
      title: "5 трендов в дизайне натяжных потолков 2024",
      excerpt: "Актуальные тенденции в мире натяжных потолков. От минимализма до смелых дизайнерских решений.",
      date: "5 ноября 2024",
      readTime: "5 мин",
      category: "Тренды",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
      views: 2134
    },
    {
      title: "Уход за натяжными потолками: простые правила",
      excerpt: "Как правильно ухаживать за натяжным потолком, чтобы он служил долгие годы. Практические советы и рекомендации.",
      date: "1 ноября 2024",
      readTime: "4 мин",
      category: "Уход",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
      views: 654
    },
    {
      title: "Многоуровневые потолки: дизайн и возможности",
      excerpt: "Все о многоуровневых натяжных потолках. Идеи для зонирования пространства и создания уникального интерьера.",
      date: "28 октября 2024",
      readTime: "7 мин",
      category: "Дизайн",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      views: 1567
    },
    {
      title: "Натяжные потолки на кухне: особенности и рекомендации",
      excerpt: "Специфика выбора и установки натяжных потолков в кухонных помещениях. Что важно учесть?",
      date: "22 октября 2024",
      readTime: "5 мин",
      category: "Советы",
      image: "https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=800&q=80",
      views: 743
    }
  ];

  const categories = ["Все статьи", "Советы", "Тренды", "Дизайн", "Уход", "Сравнение"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl font-bold mb-4 text-secondary">Блог о натяжных потолках</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Полезные статьи, советы экспертов и последние тренды в мире натяжных потолков
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-12 animate-fade-in-up">
          {categories.map((category, index) => (
            <Badge
              key={index}
              variant={index === 0 ? "default" : "outline"}
              className="px-4 py-2 text-sm cursor-pointer hover:bg-primary hover:text-white transition-colors"
            >
              {category}
            </Badge>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">{article.category}</Badge>
                  <span className="text-sm text-muted-foreground">{article.date}</span>
                </div>
                <CardTitle className="text-xl hover:text-primary transition-colors">
                  {article.title}
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  {article.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" size={16} />
                    <span>{article.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Eye" size={16} />
                    <span>{article.views}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-primary/5 rounded-2xl p-12 text-center animate-scale-in">
          <Icon name="Mail" className="text-primary mx-auto mb-4" size={48} />
          <h2 className="text-3xl font-bold mb-4 text-secondary">Подпишитесь на рассылку</h2>
          <p className="text-xl text-muted-foreground mb-6 max-w-xl mx-auto">
            Получайте новые статьи, советы экспертов и эксклюзивные предложения первыми
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Ваш email"
              className="flex-1 px-4 py-3 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Подписаться
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
