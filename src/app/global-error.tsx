"use client";

import { useEffect } from "react";
// import { captureException } from "@sentry/nextjs";
import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function GlobalError({
  error,
  // reset,
}: {
  error: Error & { digest?: string };
  // reset: () => void;
}) {
  useEffect(() => {
    // error logs
    console.error("Global Error:", {
      message: error.message,
      digest: error.digest,
      stack: error.stack,
    });
    // captureException(error, {
    //   tags: { component: "GalleryError" },
    // });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center" role="alert">
      <div className="max-w-md rounded-lg bg-destructive/10 p-9 text-center text-destructive">
        <h2 className="mb-2 text-xl font-semibold md:text-3xl">
          Something went wrong!
        </h2>
        <p className="mb-4 text-xs md:text-lg">
          Please try refreshing the page...
        </p>
        <Link href={"/"}>
          <Button variant="ghost" className="gap-1 p-4 text-3xl">
            <span aria-hidden="true">♻️</span>
            {/* <span className="text-lg">Return to Home</span> */}
          </Button>
          {/* <Button variant="ghost" className="text-3xl">
          ♻️
        </Button> */}
        </Link>
      </div>
    </div>
  );
}
