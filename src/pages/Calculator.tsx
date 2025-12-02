import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const Calculator = () => {
  const [area, setArea] = useState<number>(20);
  const [ceilingType, setCeilingType] = useState<string>("matte");
  const [corners, setCorners] = useState<number>(4);
  const [lighting, setLighting] = useState<boolean>(false);
  const [installation, setInstallation] = useState<boolean>(true);

  const prices: Record<string, number> = {
    matte: 380,
    glossy: 450,
    satin: 420,
    multilevel: 650,
    photo: 800,
    carved: 1200
  };

  const calculateTotal = () => {
    const basePrice = prices[ceilingType] * area;
    const cornerPrice = corners * 150;
    const lightingPrice = lighting ? area * 200 : 0;
    const installationPrice = installation ? 3000 : 0;
    
    return basePrice + cornerPrice + lightingPrice + installationPrice;
  };

  const total = calculateTotal();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl font-bold mb-4 text-secondary">Калькулятор стоимости</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Рассчитайте примерную стоимость натяжного потолка за 1 минуту
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="animate-fade-in-up">
            <CardHeader>
              <CardTitle className="text-2xl">Параметры потолка</CardTitle>
              <CardDescription>Заполните данные для расчета стоимости</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="area" className="text-base font-semibold">
                  Площадь помещения: {area} м²
                </Label>
                <Slider
                  id="area"
                  min={5}
                  max={100}
                  step={1}
                  value={[area]}
                  onValueChange={(value) => setArea(value[0])}
                  className="py-4"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>5 м²</span>
                  <span>100 м²</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="type" className="text-base font-semibold">
                  Тип потолка
                </Label>
                <Select value={ceilingType} onValueChange={setCeilingType}>
                  <SelectTrigger id="type">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="matte">Матовый (380 ₽/м²)</SelectItem>
                    <SelectItem value="glossy">Глянцевый (450 ₽/м²)</SelectItem>
                    <SelectItem value="satin">Сатиновый (420 ₽/м²)</SelectItem>
                    <SelectItem value="multilevel">Многоуровневый (650 ₽/м²)</SelectItem>
                    <SelectItem value="photo">Фотопечать (800 ₽/м²)</SelectItem>
                    <SelectItem value="carved">Резной Apply (1200 ₽/м²)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="corners" className="text-base font-semibold">
                  Количество углов
                </Label>
                <Input
                  id="corners"
                  type="number"
                  min={4}
                  max={12}
                  value={corners}
                  onChange={(e) => setCorners(Number(e.target.value))}
                />
                <p className="text-sm text-muted-foreground">
                  Стандартное помещение имеет 4 угла
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                  <div className="flex items-center gap-3">
                    <Icon name="Lightbulb" className="text-primary" size={24} />
                    <div>
                      <p className="font-semibold">Встроенное освещение</p>
                      <p className="text-sm text-muted-foreground">+200 ₽/м²</p>
                    </div>
                  </div>
                  <Button
                    variant={lighting ? "default" : "outline"}
                    size="sm"
                    onClick={() => setLighting(!lighting)}
                  >
                    {lighting ? "Включено" : "Добавить"}
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                  <div className="flex items-center gap-3">
                    <Icon name="Wrench" className="text-primary" size={24} />
                    <div>
                      <p className="font-semibold">Монтаж и установка</p>
                      <p className="text-sm text-muted-foreground">+3000 ₽</p>
                    </div>
                  </div>
                  <Button
                    variant={installation ? "default" : "outline"}
                    size="sm"
                    onClick={() => setInstallation(!installation)}
                  >
                    {installation ? "Включено" : "Добавить"}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="animate-fade-in-up bg-gradient-to-br from-primary to-primary/80 text-white" style={{ animationDelay: "100ms" }}>
              <CardHeader>
                <CardTitle className="text-2xl">Итоговая стоимость</CardTitle>
                <CardDescription className="text-white/80">
                  Расчет включает все выбранные опции
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-white/20">
                    <span>Материал потолка</span>
                    <span className="font-semibold">{(prices[ceilingType] * area).toLocaleString()} ₽</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-white/20">
                    <span>Обработка углов ({corners} шт.)</span>
                    <span className="font-semibold">{(corners * 150).toLocaleString()} ₽</span>
                  </div>
                  {lighting && (
                    <div className="flex justify-between items-center pb-4 border-b border-white/20">
                      <span>Встроенное освещение</span>
                      <span className="font-semibold">{(area * 200).toLocaleString()} ₽</span>
                    </div>
                  )}
                  {installation && (
                    <div className="flex justify-between items-center pb-4 border-b border-white/20">
                      <span>Монтаж и установка</span>
                      <span className="font-semibold">3 000 ₽</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center text-2xl font-bold pt-4">
                    <span>Итого:</span>
                    <span>{total.toLocaleString()} ₽</span>
                  </div>
                </div>
                <Button size="lg" className="w-full mt-6 bg-white text-primary hover:bg-gray-100">
                  Заказать расчет
                </Button>
              </CardContent>
            </Card>

            <Card className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="BadgeCheck" className="text-primary flex-shrink-0" size={24} />
                    <div>
                      <p className="font-semibold">Гарантия 12 лет</p>
                      <p className="text-sm text-muted-foreground">На все виды работ и материалы</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" className="text-primary flex-shrink-0" size={24} />
                    <div>
                      <p className="font-semibold">Монтаж за 1 день</p>
                      <p className="text-sm text-muted-foreground">Быстрая и чистая установка</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Shield" className="text-primary flex-shrink-0" size={24} />
                    <div>
                      <p className="font-semibold">Договор и смета</p>
                      <p className="text-sm text-muted-foreground">Фиксированная цена без доплат</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
              <div className="flex items-start gap-3">
                <Badge className="bg-yellow-500 text-white">Акция</Badge>
                <div>
                  <p className="font-semibold text-yellow-900 mb-1">
                    Скидка 15% при заказе в этом месяце
                  </p>
                  <p className="text-sm text-yellow-800">
                    Ваша экономия: {(total * 0.15).toLocaleString()} ₽
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
