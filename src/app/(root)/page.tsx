import Stars from "~/components/Stars";
import StarboyLogo from "~/components/StarboyLogo";
// import Footer from "~/components/Footer";

// ISR
export const revalidate = 3600;

export default function Page() {
  return (
    <div className="relative h-screen w-screen">
      <Stars></Stars>
      <div className="z-1 relative flex min-h-screen items-center justify-center">
        <div className="w-36 sm:w-40 md:w-48">
          <StarboyLogo></StarboyLogo>
        </div>
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
}
