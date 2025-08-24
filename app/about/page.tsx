import Hero from "@/components/shared/About/Hero";
import VM from "@/components/shared/About/VM";
import MainCommitte from "@/components/shared/About/Committee";
import LogoSection from "@/components/shared/About/Logo";
import LogoDetail from "@/components/shared/About/Detail";
import OurMascot from "@/components/shared/About/Mascot";
import Visionary from "@/components/shared/About/Visionaries";
import PastMascots from "@/components/shared/About/Past";
import Yearbook from  "@/components/shared/About/YB";

export default function AboutPage() {
  return (
    <main>
      <Hero />
      <VM />
      <Yearbook/>
      <LogoSection />
      <LogoDetail />
      <OurMascot />
      <MainCommitte />
      <PastMascots /> 
      <Visionary />
    </main>
  );
}