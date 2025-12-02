import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const projects = [
    {
      title: "Глянцевый потолок в гостиной",
      category: "Глянцевые",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
      area: "25 м²"
    },
    {
      title: "Двухуровневый потолок со светодиодами",
      category: "Многоуровневые",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      area: "32 м²"
    },
    {
      title: "Матовый белый в спальне",
      category: "Матовые",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
      area: "18 м²"
    },
    {
      title: "Фотопечать небо",
      category: "Фотопечать",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
      area: "22 м²"
    },
    {
      title: "Сатиновый потолок с подсветкой",
      category: "Сатиновые",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      area: "28 м²"
    },
    {
      title: "Резной потолок Apply в кабинете",
      category: "Резные",
      image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80",
      area: "20 м²"
    },
    {
      title: "Черный глянец в прихожей",
      category: "Глянцевые",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
      area: "12 м²"
    },
    {
      title: "Многоуровневый с парящими линиями",
      category: "Многоуровневые",
      image: "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=800&q=80",
      area: "35 м²"
    },
    {
      title: "Бежевый матовый на кухне",
      category: "Матовые",
      image: "https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=800&q=80",
      area: "15 м²"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl font-bold mb-4 text-secondary">Галерея работ</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Более 5000 выполненных проектов за 15 лет работы
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl cursor-pointer animate-fade-in-up hover:shadow-2xl transition-all duration-300"
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => setSelectedImage(index)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <Badge className="mb-2 bg-primary">{project.category}</Badge>
                  <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                  <p className="text-sm opacity-90">Площадь: {project.area}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in-up">
          <div className="bg-white rounded-2xl p-12 shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-secondary">Впечатлены нашими работами?</h2>
            <p className="text-xl text-muted-foreground mb-6">
              Закажите бесплатный замер и получите дизайн-проект в подарок
            </p>
            <button className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors">
              Заказать бесплатный замер
            </button>
          </div>
        </div>
      </div>

      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          {selectedImage !== null && (
            <div>
              <img
                src={projects[selectedImage].image}
                alt={projects[selectedImage].title}
                className="w-full rounded-lg"
              />
              <div className="mt-4">
                <Badge className="mb-2">{projects[selectedImage].category}</Badge>
                <h3 className="text-2xl font-bold mb-2">{projects[selectedImage].title}</h3>
                <p className="text-muted-foreground">Площадь: {projects[selectedImage].area}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;
