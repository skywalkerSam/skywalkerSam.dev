import { HOME_OG_IMAGE_URL } from "~/lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `About`,
  description: `About Starboy...`,
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
