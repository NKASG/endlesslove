import HeroSection from "@/components/wedding/HeroSection";
import LoveStorySection from "@/components/wedding/LoveStorySection";
import PhotoSharingSection from "@/components/wedding/PhotoSharingSection";
import Footer from "@/components/wedding/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <LoveStorySection />
      <PhotoSharingSection />
      <Footer />
    </main>
  );
};

export default Index;
