"use client";

import Image from "next/image";
import { starboyLogoStyles } from "~/styles/styles";
import "~/styles/starboy-logo.css";

export default function StarboyLogo() {
  return (
    <div className={starboyLogoStyles.starboyLogo}>
      <a
        href="https://github.com/skywalkerSam"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/icon.svg"
          alt="Starboy Logo"
          width={210}
          height={210}
          className="starboy-logo"
          priority
        ></Image>
      </a>
    </div>
  );
}
