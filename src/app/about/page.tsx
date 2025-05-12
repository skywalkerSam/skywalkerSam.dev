import Image from "next/image";

export default function About() {
  return (
    <main>
      <div className="min-h-screen bg-gradient-to-b from-transparent via-blue-400 to-transparent p-4">
        <div className="flex flex-col items-center justify-center">
          <div className="mt-36">
            <h1 className="py-9 text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl">
              👋 i'm Sam, i write things...
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
        <p className="mx-auto max-w-3xl text-lg tracking-tight sm:tracking-normal md:max-w-4xl md:text-xl md:tracking-wide lg:text-2xl lg:tracking-wider xl:tracking-widest">
          in search of a better understanding of the world...
        </p>
      </div>

      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-transparent via-cyan-400 to-transparent p-4">
        <p className="mx-auto max-w-3xl text-lg tracking-tight sm:tracking-normal md:max-w-4xl md:text-xl md:tracking-wide lg:text-2xl lg:tracking-wider xl:tracking-widest">
          i've been learning to code for ~6 years now. i started off by
          installing Ubuntu on my ancient PC, which was having a hard time with
          Windows. i started learning more and more, and life went on and on...
          and here i am. What began as a hobby turned into a kind of passion:
          Linux, BA$H, Python, JavaScript, Node, React, NEXT, TypeScript, and
          life goes on...
        </p>
      </div>

      <div className="flex min-h-screen flex-col bg-gradient-to-b from-transparent via-amber-400 to-transparent p-9">
        <div className="mx-auto max-w-3xl text-lg tracking-tight sm:tracking-normal md:max-w-4xl md:text-xl md:tracking-wide lg:text-2xl lg:tracking-wider xl:tracking-widest">
          <div className="py-4">
            <a
              href="https://twitter.com/skywalkerSam_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs hover:text-sky-200"
            >
              @skywalkerSam_
            </a>
            <h1 className="mb-4 text-4xl md:text-5xl">Starboy...</h1>
          </div>
          <div>
            <p className="text-lg md:text-xl lg:text-2xl">
              Oh, the name Starboy... First of all, No* it isn't inspired by The
              Weeknd’s 2016 Album, Starboy (Although, it is a good album.) The
              name "Starboy" originates from the mind of an optimistic little
              kid, i.e., me... initially, he was very excited about Space
              Exploration, Cosmic Wonders. He had a very optimistic view about
              the future of Human Civilization. He was all about optimism and
              hope... And that is a good thing to see in a teenage kid. All that
              energy and excitement without the need for caffeine* But sadly,
              life goes on... You live, you learn, you grow. Even after all this
              time, i keep the name "Starboy" to remind me of that sweet little
              kid, even though now it seems a bit corny and cringe asf. At that
              time, i really believed that anything was possible… As i chose
              this name, my heart was in the right place: We all are, in fact,
              Stardust. We really are... A star had to collapse in order to give
              life the elements it needs to emerge... We live in a universe
              where energy can't be created or destroyed. All energy is but
              borrowed. So, in the end, the dynamic pattern, i.e., us, dissolves
              into its simpler forms. And, the pattern keeps repeating itself
              for reasons beyond our current understanding of the world, the
              universe, our shared existence, and whatever tf lies beyond... So,
              here i stand... a complicated collection of atoms that originated
              from a tiny region of a collapsing Star in a galaxy far, far
              away... And, traveled through a vast, hostile, lifeless and
              utterly meaningless universe, and against all odds, here i fucking
              am... Contemplating my existence and just wondering about all
              there is in this absurdly strange little life... And after all, i
              am a Boy, so there you go... "Starboy"
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
