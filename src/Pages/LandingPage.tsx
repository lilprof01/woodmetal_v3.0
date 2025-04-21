import { AboutUs, Hero, OurWorks, WhyChooseUs } from "@/Components/Main";
import { Toggler, HeroTag, Header } from "@/Components/UI";

const LandingPage = () => {
  return (
    <main className="bg-white dark:bg-black relative h-[4000px]">
      <Header />
      <Toggler />
      <Hero />
      <HeroTag />
      <AboutUs />
      <WhyChooseUs />
      <OurWorks />
    </main>
  );
};

export default LandingPage;