
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const courses = [
  {
    title: "Zajęcia grupowe",
    description: "Małe grupy liczące od 2 do 8 osób, dostosowane do poziomu językowego i wieku uczniów.",
    duration: "30 lekcji",
    level: "Wszystkie poziomy",
    features: [
      "Zajęcia 1-2 razy w tygodniu",
      "Grupy 2-osobowe: 2100zł/os",
      "Grupy 3-osobowe: 1800zł/os",
      "Grupy 4-6 osób: 1500zł/os"
    ]
  },
  {
    title: "Zajęcia indywidualne",
    description: "Kursy szyte na miarę każdego ucznia, odpowiadające w pełni na indywidualne potrzeby.",
    duration: "Elastyczna",
    level: "Wszystkie poziomy",
    features: [
      "Kursy ogólne i specjalistyczne",
      "30 lekcji: 99zł/lekcja",
      "60 lekcji: 94zł/lekcja",
      "90-120 lekcji: od 80zł/lekcja"
    ]
  },
  {
    title: "Zajęcia dla firm",
    description: "Oferujemy kursy ogólne oraz specjalistyczne dostosowane do potrzeb firm.",
    duration: "Elastyczna",
    level: "Wszystkie poziomy",
    features: [
      "Lekcje stacjonarne lub online",
      "Ceny ustalane indywidualnie",
      "Dogodne terminy",
      "Możliwe szkolenia weekendowe"
    ]
  }
];

const CourseSection = () => {
  return (
    <section id="courses" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-brand-red font-medium mb-2">NASZA OFERTA</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Rodzaje kursów</h2>
          <div className="w-20 h-1 bg-brand-red mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            Oferujemy różne rodzaje kursów językowych dostosowanych do Twoich potrzeb i możliwości.
            Każde zajęcia prowadzone są przez doświadczonych lektorów z pasją do nauczania.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div 
              key={index} 
              className={cn(
                "bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1",
                index === 1 ? "border-2 border-brand-red relative" : ""
              )}
            >
              {index === 1 && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-red text-white px-4 py-1 rounded-full text-sm font-medium">
                  Najpopularniejszy
                </div>
              )}
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold mb-3">{course.title}</h3>
                <p className="text-gray-600 mb-6">{course.description}</p>
                
                <div className="flex justify-between text-sm text-gray-500 mb-6">
                  <span>Czas trwania: {course.duration}</span>
                  <span>Poziom: {course.level}</span>
                </div>
                
                <div className="mb-8">
                  <p className="font-medium mb-3">Szczegóły:</p>
                  <ul className="space-y-2">
                    {course.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-brand-red" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button className={cn(
                  "w-full",
                  index === 1 
                    ? "bg-brand-red hover:bg-brand-darkred text-white" 
                    : "bg-white border border-brand-red text-brand-red hover:bg-brand-red/5"
                )}>
                  Więcej informacji
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-8 bg-white rounded-xl shadow-lg">
          <h3 className="text-xl font-bold mb-4 text-center">Dodatkowe informacje</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold mb-3 text-brand-red">Zajęcia online</h4>
              <p className="text-gray-700 mb-4">
                Każdy rodzaj zajęć oferowany przez nas może być prowadzony w formie zajęć zdalnych przy użyciu programu ZOOM.
                Zajęcia online są objęte tym samym cennikiem.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-brand-red">System płatności</h4>
              <p className="text-gray-700 mb-4">
                Płatności mogą być uiszczane w systemie ratalnym - 2 równe wpłaty semestralne lub 10 równych rat miesięcznych.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Button className="bg-brand-red hover:bg-brand-darkred text-white text-lg px-8 py-6">
            Zapisz się na zajęcia
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
