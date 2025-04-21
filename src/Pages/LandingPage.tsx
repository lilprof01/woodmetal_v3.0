import WhyChooseUs from "@/Components/Main/WhyChooseUs";
import { AboutUs, Hero } from "@/Components/Main";
import { Toggler } from "@/Components/UI";
import Header from "@/Components/UI/Header";
import HeroTag from "@/Components/UI/HeroTag";

const LandingPage = () => {
  return (
    <main className="bg-white dark:bg-black relative h-[3000px]">
      <Header />
      <Toggler />
      <Hero />
      <HeroTag />
      <AboutUs />
      <WhyChooseUs />
    </main>
  );
};

export default LandingPage;
