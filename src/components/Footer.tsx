import reactLogo from "../assets/react.svg";
import appLogo from "/favicon.svg";

export default function Footer() {
  return (
    <>
      <footer className="mt-60">
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={appLogo} className="logo inline-block" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img
              src={reactLogo}
              className="logo react inline-block"
              alt="React logo"
            />
          </a>
          <br />
          <small>&copy; Copyright 12025, <span><a href="https://github.com/skywalkerSam" target="_blank" className="hover:underline hover:text-cyan-300">@skywalkerSam</a></span></small>
        </div>
      </footer>
    </>
  );
}
