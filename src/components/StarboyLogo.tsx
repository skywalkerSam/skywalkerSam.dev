import starboyLogo from "/logo.png";

export default function StarboyLogo() {
  return (
    <>
      <div className="flex justify-center items-center mb-36">
        <a
          href="https://github.com/skywalkersam"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={starboyLogo} alt="Starboy Logo" className="starboyLogo" />
        </a>
      </div>
    </>
  );
}
