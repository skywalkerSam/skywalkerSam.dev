import { CMS_NAME, HOME_OG_IMAGE_URL } from "~/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Starboy's Blog`,
  description: `Starboy's Blog with ${CMS_NAME}`,
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-gradient-to-b from-transparent via-blue-400 to-transparent">
      {children}
    </main>
  );
}
