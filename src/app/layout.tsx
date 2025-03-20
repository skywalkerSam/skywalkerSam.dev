import "~/styles/globals.css"
import type { Metadata } from "next";
import { ThemeProvider } from "~/components/theme-provider";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/nextjs";
import StarboyLogo from "~/components/ui/starboy-logo";
import UserSignInButton from "~/components/ui/sign-in";
import { centeredDivStyle } from "~/styles/styles";
import Footer from "~/components/ui/footer";
import MainTitle from "~/components/ui/main-title";

// https://nextjs.org/learn/dashboard-app/adding-metadata
export const metadata: Metadata = {
  title: {
    template: "%s",
    default: "Starboy Inc.",
  },
  description:
    "Starboy Inc. dashboard demo built with NEXT.js + Vercel by @skywalkerSam",
  metadataBase: new URL("https://skywalkersam.dev/"),
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className="antialiased">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SignedOut>
              <div className="flex flex-row-reverse p-3">
                <UserSignInButton></UserSignInButton>
              </div>
              <div className={centeredDivStyle}>
                <StarboyLogo></StarboyLogo>
              </div>
              <div className={centeredDivStyle}>
                <MainTitle></MainTitle>
              </div>
            </SignedOut>
            <SignedIn>
              <main>{children}</main>
            </SignedIn>
            <Footer></Footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
