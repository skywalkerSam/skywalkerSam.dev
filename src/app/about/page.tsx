import Image from "next/image";

export default function About() {
  return (
    <div className="flex min-h-screen flex-row items-center justify-center">
      <div className="w-48 md:w-60 lg:w-72">
        <Image
          src="https://github.com/skywalkerSam.png"
          width={300}
          height={300}
          alt="Profile Image"
        ></Image>
        <a
          href="https://x.com/skywalkerSam_"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-end justify-end hover:text-sky-400"
        >
          @skywalkerSam_
        </a>
      </div>
    </div>
  );
}
