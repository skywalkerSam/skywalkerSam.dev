export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="bg-gradient-to-b from-transparent via-sky-950 to-transparent">
        {children}
      </main>
    </>
  );
}
