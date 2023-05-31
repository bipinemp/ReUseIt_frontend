import Navbar from "../components/dashboard/Navbar";
import Sidebar from "../components/dashboard/Sidebar";

export default function RootLayout({ children }) {
  return (
    <main className="relative w-full flex flex-row bg-mode-light">
      <div className="fixed">
        <Sidebar />
      </div>
      <section className="flex flex-1 flex-col ml-72">
        <Navbar />
        <div>{children}</div>
      </section>
    </main>
  );
}
