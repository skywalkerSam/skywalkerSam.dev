"use client";

import { SignInButton } from "@clerk/nextjs";
// import { Button } from "./button";

// const signInButtonStyle =
//   "flex justify-end p-3 text-lg font-semibold text-blue-400 tracking-tighter";
const signInButtonHoverStyle =
  "rounded-md hover:text-gray-400 focus:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:ring-offset-1 active:text-slate-600";

export default function UserSignInButton() {
  return (
    <SignInButton>
      <button
        aria-label="Sign in to your account"
        className={signInButtonHoverStyle}
      >
        Sign In
      </button>
      {/* <Button variant="ghost"></Button> */}
    </SignInButton>
  );
}
