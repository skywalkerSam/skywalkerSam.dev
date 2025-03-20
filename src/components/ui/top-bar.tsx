"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import "~/styles/starboy-logo.css";
import type { JSX } from "react";
import { Button } from "./button";

export default function TopBar(): JSX.Element {
  return (
    <div>
      <div className="flex flex-row-reverse gap-3 p-3">
        <div>
          <UserButton></UserButton>
        </div>
        <div>
          <Link href={"/dashboard"}>
            <Button variant="ghost">Dashboard</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
