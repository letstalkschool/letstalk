
import { GraduationCap } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-brand-cream">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center mb-16">
          <GraduationCap className="text-brand-red h-12 w-12 mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nasza misja</h2>
          <div className="w-20 h-1 bg-brand-red mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl">
            Tworzymy miejsce, w którym nauka języków staje się inspirującą przygodą, 
            a każdy uczeń odkrywa swój pełen potencjał.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">O szkole Let's Talk</h3>
            <p className="text-gray-700 mb-6">
              Nasza szkoła językowa powstała z pasji do nauczania i przekonania, że nauka języka 
              powinna być dostosowana do indywidualnych potrzeb każdego ucznia. Od ponad dekady 
              tworzymy miejsce, gdzie tradycyjne metody nauczania łączą się z innowacyjnym podejściem, 
              tworząc unikalne doświadczenie edukacyjne.
            </p>
            <p className="text-gray-700 mb-6">
              W Let's Talk wierzymy, że każdy ma swój własny styl uczenia się. Dlatego nasza 
              metodologia opiera się na elastycznym podejściu, które uwzględnia różnorodne potrzeby 
              i cele naszych uczniów. Nasi wykwalifikowani nauczyciele posiadają nie tylko 
              doświadczenie dydaktyczne, ale również pasję do języków i kultur.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-md card-hover">
                <div className="bg-brand-red/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-brand-red font-bold text-lg">01</span>
                </div>
                <h4 className="font-bold mb-2">Indywidualne podejście</h4>
                <p className="text-gray-600 text-sm">
                  Dostosowujemy metody nauczania do Twoich indywidualnych potrzeb i celów.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md card-hover">
                <div className="bg-brand-red/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-brand-red font-bold text-lg">02</span>
                </div>
                <h4 className="font-bold mb-2">Wykwalifikowani nauczyciele</h4>
                <p className="text-gray-600 text-sm">
                  Nauczyciele z doświadczeniem i pasją do przekazywania wiedzy.
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
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Our school environment"
                className="rounded-lg shadow-xl object-cover w-full h-[600px] relative z-10"
              />
              <div className="absolute bottom-8 -right-8 bg-white p-6 rounded-lg shadow-lg z-20">
                <p className="text-4xl font-serif font-bold text-brand-red mb-1">10+</p>
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
