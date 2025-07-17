import AboutMe from "./_components/AboutMe";
import AnimatedIntro from "./_components/animated-intro";
import Bio from "./_components/Bio";
// import Intro from "./_components/intro";

export default function About() {
  return (
    <main>
      {/* <Intro></Intro> */}
      <AnimatedIntro></AnimatedIntro>
      <Bio></Bio>
      <AboutMe></AboutMe>
    </main>
  );
}
