const testimonials = [
  {
    content: "Bardzo polecam szkołę językową. Zajęcia są prowadzone w bardzo ciekawy i profesjonalny sposób. Lektorzy są otwarci na nasze propozycje i potrzeby, zaangażowani, kreatywni. Atmosfera na zajęciach jest bardzo przyjazna. Córka uczęszcza na zajęcia od roku i od września będzie kontynuować naukę w tej szkole. Szczerze polecam!",
    author: "Agnieszka Belter",
    role: "Mama uczennicy",
    avatar: "https://randomuser.me/api/portraits/women/17.jpg"
  },
  {
    content: "Gorąco polecam szkołę językową Let's talk Romy Górskiej. Świetna, kameralna atmosfera, doskonale przygotowani lektorzy, którzy w niezauważalny i naturalny sposób przełamują bariery językowe nawet najbardziej opornych kursantów. Dodatkowo właścicielka to niezwykle miła, otwarta i komunikatywna osoba, co w tej branży jest niezbędne. Godne polecenia dla wszystkich tych, którzy przygodę z angielskim dopiero zaczynają lub już zaczęli.",
    author: "Piotr Nowatkowski",
    role: "Uczestnik kursu angielskiego",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    content: "Zdecydowana większość uczniów jest z nami związana od lat, a nowi słuchacze w większości dołączają do nas z polecenia. To świadczy o jakości naszych usług i zadowoleniu uczniów.",
    author: "Roma Górska",
    role: "Właścicielka szkoły Let's Talk",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  }
];

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-brand-red/5">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-brand-red font-medium mb-2">OPINIE</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Co mówią o nas nasi uczniowie</h2>
          <div className="w-20 h-1 bg-brand-red mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-lg relative card-hover"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6">
                <svg width="42" height="36" viewBox="0 0 42 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.5 0L0 16.5V36H19.5V16.5H9.75L16.5 9.75V0ZM39 0L22.5 16.5V36H42V16.5H32.25L39 9.75V0Z" fill="#F2F2F2"/>
                </svg>
              </div>
              
              {/* Testimonial content */}
              <div className="mb-8">
                <p className="text-gray-700 italic relative z-10">{testimonial.content}</p>
              </div>
              
              {/* Author info */}
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-brand-red"
                />
                <div>
                  <h4 className="font-bold">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-white rounded-xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Gotowy na nową przygodę językową?</h3>
            <p className="text-gray-600">Dołącz do grona zadowolonych uczniów Let's Talk już dziś!</p>
          </div>
          <button className="bg-brand-red hover:bg-brand-darkred text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Zapisz się na zajęcia
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
