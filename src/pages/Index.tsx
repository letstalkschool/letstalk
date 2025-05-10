
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CourseSection from "@/components/CourseSection";
import TestimonialSection from "@/components/TestimonialSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

// Configure all image paths as appropriate constants
// to make it easier to replace them in the future
export const SCHOOL_IMAGES = {
  classroom: "/lovable-uploads/94a61802-b9d5-42c7-a45a-20a30fc31960.png",
  groupLessons: "/lovable-uploads/cd2677ed-7785-4b0c-85b7-b5f15678affc.png",
  activities: "/lovable-uploads/6ca6be47-88ab-45de-9455-0e5db41f0f3c.png", 
  teacherAndStudents: "/lovable-uploads/5ae6a329-9447-4376-9052-d7937d4c9953.png",
  gameBasedLearning: "/lovable-uploads/55ad5d90-13c6-46a5-b40a-963e253547b5.png",
  teachers: "/lovable-uploads/e78168f2-c3cd-4c14-8fb8-6f52e2e50bec.png",
  teachingMaterials: "/lovable-uploads/847f1c7e-7fa1-4fab-8516-d45a3c5137d1.png",
  teenClass: "/lovable-uploads/dedf3221-ebe0-4a43-9237-b1058eef60d4.png",
  halloweenEvent: "/lovable-uploads/27ad5cc6-df56-4c4a-946f-2617fb6d79b1.png",
  teacher: "/lovable-uploads/d66b7b13-c741-4b94-a50b-7138cf3a421d.png",
  foodVocabulary: "/lovable-uploads/cc2a930e-5d93-4aaf-ae8b-33cbbdc4100e.png",
  emotionsLearning: "/lovable-uploads/506d6a0c-138f-4a93-bdd3-c2d05a3497d9.png",
  sandwriting: "/lovable-uploads/c815ea93-682a-48da-8c48-e2e225096c99.png",
  teachingSession: "/lovable-uploads/d232025c-6e2d-4445-b50d-a480714b8dc6.png"
};

const Index = () => {
  return (
    <div className="min-h-screen bg-brand-light">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CourseSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
