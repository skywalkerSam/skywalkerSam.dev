"use client";

import { SignInButton } from "@clerk/nextjs";
// import { Button } from "./button";
import { signInStyles } from "~/styles/styles";

export default function UserSignInButton() {
  return (
    <SignInButton>
      <button
          aria-label="Sign in to your account"
          className={signInStyles.signInButtonHover}
        >
          Sign In
        </button>
      {/* <Button variant="ghost"></Button> */}
    </SignInButton>
  );
}
