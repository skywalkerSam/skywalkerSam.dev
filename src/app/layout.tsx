import "~/styles/globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "~/components/ui/theme-provider";
import { Paprika } from "next/font/google";
import { NavBar } from "~/components/NavBar";
import Footer from "~/components/Footer";

const paprika = Paprika({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

// https://nextjs.org/learn/dashboard-app/adding-metadata
export const metadata: Metadata = {
  title: {
    template: "%s",
    default: "Starboy",
  },
  description: "Starboy Homepage",
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
      <body className={`${paprika.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          // enableSystem
          disableTransitionOnChange
        >
          <NavBar></NavBar>
          <main>{children}</main>

          <Footer></Footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
