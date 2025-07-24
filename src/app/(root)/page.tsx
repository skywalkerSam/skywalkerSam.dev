import Stars from "~/components/Stars";
import StarboyLogo from "../_components/starboy-logo";

export default function Page() {
  return (
    <div className="relative w-screen h-screen">
      <Stars></Stars>
      <div className="flex min-h-screen items-center justify-center relative z-1">
        <div className="w-36 sm:w-40 md:w-48">
          <StarboyLogo></StarboyLogo>
        </div>
      </div>
    </div>
  );
}
