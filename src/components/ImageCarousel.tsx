
import { useState, useEffect, useRef } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { CarouselApi } from "@/components/ui/carousel";

type ImageCarouselProps = {
  images: string[];
  className?: string;
  autoplay?: boolean;
  interval?: number;
};

const ImageCarousel = ({ 
  images, 
  className, 
  autoplay = true,
  interval = 5000
}: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Set up autoplay
  useEffect(() => {
    if (!api || !autoplay) return;

    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Set up new interval for autoplay
    intervalRef.current = setInterval(() => {
      api.scrollNext();
    }, interval);

    // Cleanup on unmount or when dependencies change
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [api, autoplay, interval]);

  // Update currentIndex when carousel slides change
  useEffect(() => {
    if (!api) return;
    
    const onSelect = () => {
      setCurrentIndex(api.selectedScrollSnap());
    };
    
    api.on("select", onSelect);
    
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className={cn("relative rounded-xl overflow-hidden", className)}>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
        setApi={setApi}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="relative">
              <img
                src={image}
                alt={`Szkoła językowa Let's Talk - zdjęcie ${index + 1}`}
                className="w-full h-[500px] object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white">
          <ChevronLeft className="h-6 w-6 text-brand-red" />
        </CarouselPrevious>
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white">
          <ChevronRight className="h-6 w-6 text-brand-red" />
        </CarouselNext>
      </Carousel>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2.5 h-2.5 rounded-full transition-all",
              index === currentIndex ? "bg-brand-red scale-125" : "bg-white/70 hover:bg-white"
            )}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Przejdź do zdjęcia ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
