"use client";
import Image from "next/image";

export default function Intro() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-transparent via-blue-400 to-transparent p-4">
      <div className="flex flex-col items-center justify-center">
        <div className="mt-36">
          <h1 className="py-9 text-xl md:text-3xl lg:text-4xl">
            👋 i'm Sam, i write and build things...
          </h1>
        </div>
        <div className="w-48 py-4 md:w-60 lg:w-72">
          <Image
            src="https://github.com/skywalkerSam.png"
            width={300}
            height={300}
            alt="Profile Image"
          ></Image>

          <a
            href="https://twitter.com/skywalkerSam_"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-end justify-end text-xs hover:text-sky-500"
          >
            @skywalkerSam_
          </a>
        </div>
      </div>
    </div>
  );
}
