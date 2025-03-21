import "~/styles/globals.css";
import type { Metadata } from "next";
// import { layoutStyles } from "~/styles/styles";
import { ThemeProvider } from "~/components/theme-provider";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/nextjs";
import StarboyLogo from "~/components/ui/starboy-logo";
import UserSignInButton from "~/components/ui/sign-in";
import Footer from "~/components/ui/footer";
import MainTitle from "~/components/ui/main-title";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

// https://nextjs.org/learn/dashboard-app/adding-metadata
export const metadata: Metadata = {
  title: {
    template: "%s",
    default: "Starboy Inc.",
  },
  description:
    "Starboy Inc.",
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
        <body className={`${ubuntu.className} antialiased`}>
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
              <div className="flex min-h-screen flex-row items-center justify-center">
                <StarboyLogo></StarboyLogo>
              </div>
              <div className="flex min-h-screen flex-row items-center justify-center">
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
