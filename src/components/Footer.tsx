import reactLogo from "../assets/react.svg";
import appLogo from "/favicon.svg";

export default function Footer() {
  return (
    <>
      <footer className="mt-12">
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
          <small>&copy; Copyright 12024, Starboy Inc.</small>
        </div>
      </footer>
    </>
  );
}
