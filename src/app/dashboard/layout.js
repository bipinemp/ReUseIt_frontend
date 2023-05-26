import Sidebar from "../components/dashboard/Sidebar";

export default function RootLayout({ children }) {
  return (
    <main className="flex gap-7 bg-mode-light h-screen">
      <Sidebar />
      {children}
    </main>
  );
}
