
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ImageCarousel from "./ImageCarousel";
import { SCHOOL_IMAGES } from "@/pages/Index";

const HeroSection = () => {
  const carouselImages = [
    SCHOOL_IMAGES.teacherAndStudents,
    SCHOOL_IMAGES.classroom,
    SCHOOL_IMAGES.groupLessons
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <img 
          src="/lovable-uploads/7e5c0d10-1046-4a9e-9b24-092f02a2b34d.png" 
          alt="Background with dog and quote" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Semi-transparent overlay for better text readability */}
      <div className="absolute inset-0 -z-10 bg-white/70"></div>

      {/* Background Elements - slightly modified for visibility */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 h-[70vh] w-1/3 bg-brand-red/5 rounded-bl-[200px]"></div>
        <div className="absolute bottom-0 left-0 h-[40vh] w-1/4 bg-brand-red/10 rounded-tr-[100px]"></div>
      </div>

      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="order-2 lg:order-1 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Szkoła językowa <span className="text-brand-red">Let's Talk!</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
            Od 10 lat pomagamy naszym uczniom rozwinąć skrzydła. Profesjonalnie i z pasją! 
            Oferujemy ciekawe zajęcia, skrojone na miarę potrzeb naszych uczniów.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-brand-red hover:bg-brand-darkred text-white text-lg px-8 py-6">
              Zapisz się na kurs
            </Button>
            <Button variant="outline" className="border-brand-red text-brand-red hover:bg-brand-red/5 text-lg px-8 py-6">
              Dowiedz się więcej
            </Button>
          </div>
          
          {/* Quote from the background image */}
          <div className="mt-8 p-4 bg-white/80 rounded-lg shadow-sm inline-block">
            <p className="text-gray-800 italic font-serif">
              "To have another language is to possess a second soul"
            </p>
          </div>
          
          {/* Stats */}
          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { value: "10+", label: "Lat doświadczenia" },
              { value: "2", label: "Lokalizacje" },
              { value: "Wysoka", label: "Skuteczność nauczania" }
            ].map((stat, index) => (
              <div key={index} className={cn(
                "py-4 text-center bg-white/80 rounded-lg",
                index !== 0 && "border-l border-gray-200"
              )}>
                <p className="text-3xl font-serif font-bold text-brand-red">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image Carousel */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative w-full">
            <div className="absolute inset-0 -z-10 bg-brand-red/10 blur-3xl rounded-full"></div>
            <ImageCarousel 
              images={carouselImages} 
              className="shadow-2xl animate-float"
            />
            <div className="absolute -bottom-8 -right-8 bg-white shadow-xl rounded-lg p-4 z-10">
              <p className="text-brand-red font-bold text-lg">Lokalnie</p>
              <p className="text-gray-600 text-sm">i kameralnie!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
