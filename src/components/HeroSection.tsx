
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 h-[70vh] w-1/3 bg-brand-red/5 rounded-bl-[200px]"></div>
        <div className="absolute bottom-0 left-0 h-[40vh] w-1/4 bg-brand-red/10 rounded-tr-[100px]"></div>
      </div>

      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="order-2 lg:order-1 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Doskonałość w <span className="text-brand-red">nauce języków</span> na każdym poziomie
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
            Nasza szkoła to miejsce, gdzie pasja do nauczania łączy się z innowacyjnymi metodami, 
            tworząc idealne środowisko dla Twojego rozwoju językowego.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-brand-red hover:bg-brand-darkred text-white text-lg px-8 py-6">
              Zapisz się na kurs
            </Button>
            <Button variant="outline" className="border-brand-red text-brand-red hover:bg-brand-red/5 text-lg px-8 py-6">
              Dowiedz się więcej
            </Button>
          </div>
          
          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-4">
            {[
              { value: "98%", label: "Zadowolonych uczniów" },
              { value: "10+", label: "Lat doświadczenia" },
              { value: "25+", label: "Profesjonalnych nauczycieli" }
            ].map((stat, index) => (
              <div key={index} className={cn(
                "py-4 text-center",
                index !== 0 && "border-l border-gray-200"
              )}>
                <p className="text-3xl font-serif font-bold text-brand-red">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute inset-0 -z-10 bg-brand-red/10 blur-3xl rounded-full"></div>
            <img 
              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3" 
              alt="Students learning" 
              className="rounded-xl shadow-2xl object-cover h-[500px] w-full object-center animate-float"
            />
            <div className="absolute -bottom-8 -right-8 bg-white shadow-xl rounded-lg p-4 z-10">
              <p className="text-brand-red font-bold text-lg">+1200</p>
              <p className="text-gray-600 text-sm">Absolwentów rocznie</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
