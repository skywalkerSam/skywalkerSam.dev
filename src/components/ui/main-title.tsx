export default function MainTitle() {
  return (
    <div>
      <h1 className="mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
        Starboy Inc.
      </h1>

      <p className="mx-auto max-w-2xl text-lg text-gray-500 md:text-xl">
        This is the{" "}
        <a
          href="https://github.com/skywalkerSam/dashboard-demo/"
          target="_blank"
          className="text-violet-500"
          rel="noopener noreferrer"
          aria-label="View Dashboard Demo project on GitHub"
        >
          Dashboard Demo
        </a>{" "}
        test project, brought to you by{" "}
        <a
          href="https://github.com/skywalkerSam"
          target="_blank"
          className="text-cyan-600"
          rel="noopener noreferrer"
          aria-label="View author's profile on GitHub"
        >
          @skywalkerSam
        </a>
        , built w/{" "}
        <a
          href="https://nextjs.org/learn/"
          target="_blank"
          className="text-black"
          rel="noopener noreferrer"
          aria-label="Visit Nextjs.org for more info"
        >
          <strong className="text-xl dark:invert">NEXT.js</strong>
        </a>
        , and deployed w/{" "}
        <a href="https://vercel.com" target="_blank" className="text-black">
          <strong className="text-xl dark:invert">Vercel</strong>
        </a>
      </p>
    </div>
  );
}
