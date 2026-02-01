import HeroSection from "@/components/wedding/HeroSection";
import LoveStorySection from "@/components/wedding/LoveStorySection";
import DuaSection from "@/components/wedding/DuaSection";
import GallerySection from "@/components/wedding/GallerySection";
import VenueSection from "@/components/wedding/VenueSection";
import HospitalitySection from "@/components/wedding/HospitalitySection";
import RSVPSection from "@/components/wedding/RSVPSection";
import PhotoSharingSection from "@/components/wedding/PhotoSharingSection";
import Footer from "@/components/wedding/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <LoveStorySection />
      <DuaSection />
      <GallerySection />
      <VenueSection />
      <HospitalitySection />
      <RSVPSection />
      <PhotoSharingSection />
      <Footer />
    </main>
  );
};

export default Index;
