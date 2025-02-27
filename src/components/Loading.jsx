export default function Loading() {
  return (
    <section className="h-screen flex flex-col justify-center items-center gap-2.5">
      <span className="loading loading-bars loading-lg text-primary"></span>
      <span className="text-gray-500">Wait for a few moments…</span>
    </section>
  );
}
