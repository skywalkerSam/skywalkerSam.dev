import StarboyLogo from "~/components/starboy-logo";
// import MainTitle from "~/components/main-title";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-sky-950 text-white">
      <div className="container flex flex-col items-center justify-center">
      <div className="flex min-h-screen flex-row items-center justify-center">
        <div className="w-48 md:w-60">
          <StarboyLogo></StarboyLogo>
        </div>
      </div>
      {/* <div className="flex min-h-screen flex-row items-center justify-center">
        <MainTitle></MainTitle>
      </div> */}
    </div>
    </main>
  );
}
