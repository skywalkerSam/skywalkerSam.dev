import Link from "next/link";
import TopBar from "~/components/ui/top-bar";
import { centeredDivStyle, mainPageStyles } from "~/styles/styles";
import MainTitle from "~/components/ui/main-title";

export default function Page() {
  return (
    <div>
      <div className="p-3">
        <TopBar></TopBar>
      </div>
      <div className={centeredDivStyle}>
        <Link
          href={"/dashboard"}
          className={mainPageStyles.linkStyle}
          aria-label="Navigate to the dashboard"
        >
          <span className="hover:underline">Navigate to Dashboard</span>
          <span aria-hidden="true" className="ml-2">
            →
          </span>
        </Link>
      </div>
      <div className={centeredDivStyle}>
        <MainTitle></MainTitle>
      </div>
    </div>
  );
}
