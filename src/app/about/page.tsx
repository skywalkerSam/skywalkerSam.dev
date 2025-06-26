import Image from "next/image";

export default function About() {
  return (
    <main>
      <div className="min-h-screen bg-gradient-to-b from-transparent via-blue-400 to-transparent p-4">
        <div className="flex flex-col items-center justify-center">
          <div className="mt-36">
            <h1 className="py-9 text-lg sm:text-xl md:text-3xl lg:text-4xl">
              👋 i'm Sam, i write and build things...
            </h1>
          </div>
          <div className="w-48 py-4 md:w-60 lg:w-72">
            <Image
              src="https://github.com/skywalkerSam.png"
              width={300}
              height={300}
              alt="Profile Image"
            ></Image>

            <a
              href="https://twitter.com/skywalkerSam_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-end justify-end text-xs hover:text-sky-400"
            >
              @skywalkerSam_
            </a>
          </div>
        </div>
      </div>

      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-transparent via-sky-400 to-transparent p-4">
        <p className="mx-auto max-w-3xl text-xl md:max-w-4xl md:text-2xl md:tracking-wide lg:text-3xl">
          in search of a better understanding of the world...
        </p>
      </div>

      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-transparent via-cyan-400 to-transparent p-4">
        <p className="mx-auto max-w-3xl text-lg md:max-w-4xl md:text-xl md:tracking-wide lg:text-2xl">
          i've been learning to code for ~6 years now. i started off by
          installing Ubuntu on my ancient PC, which was having a hard time with
          Windows. i started learning more and more, and life went on and on...
          and here i am. What began as a hobby turned into a kind of passion:
          Linux, BA$H, Python, JavaScript, Node, React, NEXT, TypeScript, and
          life goes on...
        </p>
      </div>
    </main>
  );
}
