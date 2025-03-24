import "~/styles/globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "~/components/theme-provider";
import Footer from "~/components/ui/footer";
import { Ubuntu } from "next/font/google";
// import TopBar from "~/components/ui/top-bar";
import { NavigationMenuBar } from "~/components/ui/navigation-menubar";

const ubuntu = Ubuntu({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

// https://nextjs.org/learn/dashboard-app/adding-metadata
export const metadata: Metadata = {
  title: {
    template: "%s",
    default: "Starboy Inc.",
  },
  description: "Starboy Inc.",
  metadataBase: new URL("https://skywalkersam.dev/"),
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${ubuntu.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <TopBar></TopBar> */}
          <NavigationMenuBar></NavigationMenuBar>
          <main>{children}</main>

          <Footer></Footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
