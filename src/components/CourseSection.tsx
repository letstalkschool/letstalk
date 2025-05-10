
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const courses = [
  {
    title: "Angielski dla początkujących",
    description: "Idealny kurs dla osób rozpoczynających naukę języka angielskiego od podstaw.",
    duration: "3 miesiące",
    level: "A1-A2",
    features: ["Małe grupy", "Certyfikat ukończenia", "Materiały w cenie"]
  },
  {
    title: "Konwersacje biznesowe",
    description: "Zaawansowany kurs dla profesjonalistów chcących doskonalić język w kontekście biznesowym.",
    duration: "2 miesiące",
    level: "B2-C1",
    features: ["Praktyczne scenariusze", "Native speakers", "Indywidualne konsultacje"]
  },
  {
    title: "Przygotowanie do egzaminów",
    description: "Kurs przygotowujący do międzynarodowych certyfikatów językowych.",
    duration: "4 miesiące",
    level: "B1-C2",
    features: ["Symulacje egzaminów", "Sprawdzone metody", "Gwarancja zdawalności"]
  }
];

const CourseSection = () => {
  return (
    <section id="courses" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-brand-red font-medium mb-2">NASZA OFERTA</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Wybierz kurs dla siebie</h2>
          <div className="w-20 h-1 bg-brand-red mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            Oferujemy szeroki wybór kursów językowych dostosowanych do różnych poziomów 
            zaawansowania i celów. Każdy z nich został starannie opracowany, 
            aby zapewnić najwyższą jakość nauczania.
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
                  <p className="font-medium mb-3">Zawiera:</p>
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
        
        <div className="mt-16 text-center">
          <p className="text-lg mb-6">
            Nie znalazłeś odpowiedniego kursu? Oferujemy również kursy indywidualne!
          </p>
          <Button className="bg-brand-red hover:bg-brand-darkred text-white text-lg px-8 py-6">
            Sprawdź wszystkie kursy
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
