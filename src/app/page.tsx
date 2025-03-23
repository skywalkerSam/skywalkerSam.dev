import StarboyLogo from "~/components/ui/starboy-logo";
import MainTitle from "~/components/ui/main-title";

export default function Page() {
  return (
    <div>
      <div className="flex min-h-screen flex-row items-center justify-center">
        <StarboyLogo></StarboyLogo>
      </div>
      <div className="flex min-h-screen flex-row items-center justify-center">
        <MainTitle></MainTitle>
      </div>
    </div>
  );
}
