import Stars from "~/components/Stars";
import AboutMe from "./_components/AboutMe";
import AnimatedIntro from "./_components/animated-intro";
import Bio from "./_components/Bio";
import Footer from "~/components/Footer";

// ISR
export const revalidate = 3600;

export default function About() {
  return (
    <div className="relative h-screen w-screen">
      <Stars></Stars>
      <div className="z-1 relative">
        <AnimatedIntro></AnimatedIntro>
        <Bio></Bio>
        <AboutMe></AboutMe>
      </div>
      <Footer></Footer>
    </div>
  );
}
