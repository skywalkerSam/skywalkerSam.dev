export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main>
        {/* <main className="bg-gradient-to-b from-transparent via-sky-400 to-transparent"> */}
        {children}
      </main>
    </>
  );
}
