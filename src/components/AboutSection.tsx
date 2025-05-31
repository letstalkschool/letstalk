import { GraduationCap } from "lucide-react";
import { SCHOOL_IMAGES } from "@/pages/Index";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-brand-cream">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center mb-16">
          <GraduationCap className="text-brand-red h-12 w-12 mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O nas</h2>
          <div className="w-20 h-1 bg-brand-red mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl">
            Nasi lektorzy to profesjonaliści z odpowiednim przygotowaniem i doświadczeniem - 
            ludzie, którzy do swojej pracy podchodzą z pasją i pozytywną energią!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Skuteczna Szkoła Językowa</h3>
            <p className="text-gray-700 mb-6">
              Nasze kursy nie skupiają się na jednej metodzie nauczania – używamy całego wachlarza 
              różnych metod starając się jak najskuteczniej odpowiedzieć na indywidualne potrzeby 
              naszych uczniów. Koncentrujemy większość uwagi na technikach aktywizujących, opartych 
              na komunikacji. 
            </p>
            <p className="text-gray-700 mb-6">
              Dzięki temu dzieci w naszej szkole już w wieku 13-14 lat komunikatywnie posługują się językiem. 
              Skutecznie też pozbywamy się blokady językowej u uczniów starszych i osób dorosłych. Dzieci 
              młodsze uczą się przez zabawę. Zawsze staramy się brać pod uwagę ich zainteresowania, tak aby 
              nauka z nami była dla nich przyjemnością.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-md card-hover">
                <div className="bg-brand-red/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-brand-red font-bold text-lg">01</span>
                </div>
                <h4 className="font-bold mb-2">Budowanie relacji</h4>
                <p className="text-gray-600 text-sm">
                  Bardzo ważną rolę w naszych salach lekcyjnych pełni atmosfera – stawiamy na 
                  przyjazne i ciepłe relacje.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md card-hover">
                <div className="bg-brand-red/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-brand-red font-bold text-lg">02</span>
                </div>
                <h4 className="font-bold mb-2">Pozytywne emocje</h4>
                <p className="text-gray-600 text-sm">
                  U nas wszyscy czują się bezpiecznie i na luzie, dzięki czemu proces przyswajania 
                  języka znacznie przyspiesza.
                </p>
              </div>
            </div>
          </div>

          {/* Image with decorative elements */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -top-5 -left-5 w-24 h-24 bg-brand-red/20 rounded-full"></div>
              <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-brand-red/10 rounded-full"></div>
              <img
                src={SCHOOL_IMAGES.teachingSession}
                alt="Zajęcia w szkole Let's Talk"
                className="rounded-lg shadow-xl object-cover w-full h-[600px] relative z-10"
              />
              <div className="absolute bottom-8 -right-8 bg-white p-6 rounded-lg shadow-lg z-20">
                <p className="text-4xl font-serif font-bold text-brand-red mb-1">15+</p>
                <p className="text-gray-700">Lat doświadczenia w nauczaniu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
