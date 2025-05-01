import "~/styles/globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "~/components/ui/theme-provider";
import Footer from "~/components/footer";
// import { Ubuntu } from "next/font/google";
import { Geist } from "next/font/google";
import { NavigationMenuBar } from "~/components/navigation-menubar";

// const ubuntu = Ubuntu({
//   weight: ["400", "700"],
//   style: ["normal", "italic"],
//   subsets: ["latin"],
//   display: "swap",
// });


const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
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
      <body className={`${geist.className} antialiased`}>
      {/* <body className={`${ubuntu.className} antialiased`}> */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavigationMenuBar></NavigationMenuBar>
          <main>{children}</main>

          <Footer></Footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
