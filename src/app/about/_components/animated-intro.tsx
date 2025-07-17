"use client";
import "./animated-intro.css";
import { nameList, doList, emojiList } from "_data/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function AnimatedIntro() {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" },
    );
  });
  return (
    <div className="flex min-h-screen px-6 md:justify-center md:px-0">
      <div className="hero-text">
        <h1>
          <span className="slide">
            <span className="wrapper">
              {emojiList.map((word, i) => (
                <span key={i} className="flex items-center gap-1 pb-2 md:gap-3">
                  <span>{word.text}</span>
                </span>
              ))}
            </span>
          </span>
        </h1>
        <br />
        <h1>
          i<span className="text-sky-400">&apos;</span>m
          <span className="slide">
            <span className="wrapper">
              {nameList.map((word, i) => (
                <span key={i} className="flex items-center gap-1 pb-2 md:gap-3">
                  <span className="text-sky-400">{word.text}</span>
                </span>
              ))}
            </span>
          </span>
        </h1>
        <h1>
          i
          <span className="slide">
            <span className="wrapper">
              {doList.map((word, i) => (
                <span key={i} className="flex items-center gap-1 pb-2 md:gap-3">
                  
                  <span className="text-sky-400">{word.text}</span>
                </span>
              ))}
            </span>
          </span>
        </h1>
        <h1>
          Stuff<span className="text-sky-400">.</span>
        </h1>
      </div>
    </div>
  );
}
