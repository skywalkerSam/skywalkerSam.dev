import Stars from "~/components/Stars";
import AboutMe from "./_components/AboutMe";
import AnimatedIntro from "./_components/animated-intro";
import Bio from "./_components/Bio";
import Footer from "~/components/Footer";

export default function About() {
  return (
    <div className="relative h-screen w-screen">
      <Stars></Stars>
      <div className="relative z-1">
        <AnimatedIntro></AnimatedIntro>
        <Bio></Bio>
        <AboutMe></AboutMe>
      </div>
      <Footer></Footer>
    </div>
  );
}
