import Sidebar from "@/components/admin/Sidebar";
import Header from "@/components/admin/Header";
import Footer from "@/components/admin/Footer";

export default function PanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 overflow-auto bg-light-white">
          {children}
        </main>

        <Footer />
      </div>
    </div>
  );
}