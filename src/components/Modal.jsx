export default function Modal({ children }) {
  return (
    <section className="flex justify-center items-center bg-gray-900/50 fixed inset-0 z-[2000]">
      {children}
    </section>
  );
}
