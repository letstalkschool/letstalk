export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  features: string[];
  isPopular?: boolean;
  price?: {
    amount: number;
    currency: string;
    period?: string;
  };
  schedule?: {
    frequency: string;
    duration: string;
  };
}

export const courses: Course[] = [
  {
    id: "group",
    title: "Zajęcia grupowe",
    description: "Małe grupy liczące od 2 do 8 osób, dostosowane do poziomu językowego i wieku uczniów.",
    duration: "30 lekcji",
    level: "Wszystkie poziomy",
    features: [
      "Zajęcia 1-2 razy w tygodniu",
      "Grupy 2-osobowe: 2100zł/os",
      "Grupy 3-osobowe: 1800zł/os",
      "Grupy 4-6 osób: 1500zł/os"
    ],
    schedule: {
      frequency: "1-2 razy w tygodniu",
      duration: "60 minut"
    }
  },
  {
    id: "individual",
    title: "Zajęcia indywidualne",
    description: "Kursy szyte na miarę każdego ucznia, odpowiadające w pełni na indywidualne potrzeby.",
    duration: "Elastyczna",
    level: "Wszystkie poziomy",
    isPopular: true,
    features: [
      "Kursy ogólne i specjalistyczne",
      "30 lekcji: 99zł/lekcja",
      "60 lekcji: 94zł/lekcja",
      "90-120 lekcji: od 80zł/lekcja"
    ],
    price: {
      amount: 99,
      currency: "PLN",
      period: "lekcja"
    }
  },
  {
    id: "business",
    title: "Zajęcia dla firm",
    description: "Oferujemy kursy ogólne oraz specjalistyczne dostosowane do potrzeb firm.",
    duration: "Elastyczna",
    level: "Wszystkie poziomy",
    features: [
      "Lekcje stacjonarne lub online",
      "Ceny ustalane indywidualnie",
      "Dogodne terminy",
      "Możliwe szkolenia weekendowe"
    ],
    schedule: {
      frequency: "Elastyczna",
      duration: "60-90 minut"
    }
  }
]; 