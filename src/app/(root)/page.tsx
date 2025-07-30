import Stars from "~/components/Stars";
import StarboyLogo from "~/components/StarboyLogo";
import Footer from "~/components/Footer";

export default function Page() {
  return (
    <div className="relative w-screen h-screen">
      <Stars></Stars>
      <div className="flex min-h-screen items-center justify-center relative z-1">
        <div className="w-36 sm:w-40 md:w-48">
          <StarboyLogo></StarboyLogo>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
