"use client";

import { UserButton } from "@clerk/nextjs";
import "~/styles/starboy-logo.css";
import type { JSX } from "react";

export default function TopBar(): JSX.Element {
  return (
    <div>
      <div className="flex flex-row-reverse gap-3 p-3">
        <div>
          <UserButton></UserButton>
        </div>
        <div className="flex min-h-screen flex-row items-center justify-center"></div>
      </div>
    </div>
  );
}
