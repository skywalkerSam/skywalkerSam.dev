"use client";
import "./animated-intro.css";
import { nameList, doList, emojiList } from "~/lib/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function AnimatedIntro() {
  useGSAP(() => {
    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(".hero-text h1", { y: 0, opacity: 1 });
      return;
    }
    gsap.fromTo(
      ".hero-text h1",
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 1, ease: "power2.inOut" },
    );
  }, []);

  useGSAP(() => {
    gsap.to(".things-bubbles", {
      repeat: -1,
      duration: 1.9,
      autoAlpha: 0,
      stagger: 0.7,
      repeatDelay: 0.3,
      // ease: "power4.out",
      // ease: "back.out(1)",
      ease: "slow(0.7,0.7,true)",
      // yoyo: true
    });
  });

  return (
    <div className="flex min-h-screen items-center justify-center px-3">
      <div className="hero-text">
        <h2>
          <span className="slide">
            <span className="wrapper">
              {emojiList.map((word, i) => (
                <span key={i} className="flex items-center gap-1 pb-2 md:gap-3">
                  <span>{word.text}</span>
                </span>
              ))}
            </span>
          </span>
        </h2>
        <h2>
          i<span className="text-sky-500">&apos;</span>m
          <span className="slide">
            <span className="wrapper">
              {nameList.map((word, i) => (
                <span key={i} className="flex items-center gap-1 pb-2 md:gap-3">
                  <span className="text-sky-500">{word.text}</span>
                </span>
              ))}
            </span>
          </span>
        </h2>
        <h2>
          i
          <span className="slide">
            <span className="wrapper">
              {doList.map((word, i) => (
                <span key={i} className="flex items-center gap-1 pb-2 md:gap-3">
                  <span className="text-sky-500">{word.text}</span>
                </span>
              ))}
            </span>
          </span>
        </h2>
        <h2>
          Things
          <div className="things-bubbles ml-1.5 inline-block h-4 w-4 rounded-sm bg-sky-500"></div>
          <div className="things-bubbles ml-1.5 inline-block h-4 w-4 rounded-sm bg-sky-500"></div>
          <div className="things-bubbles ml-1.5 inline-block h-4 w-4 rounded-sm bg-sky-500"></div>
        </h2>
      </div>
    </div>
  );
}
