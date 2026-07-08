import Sidebar from "@/components/admin/Sidebar";
import Header from "@/components/admin/Header";
import Footer from "@/components/admin/Footer";
import { Toaster } from "sonner";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">

      <div className="flex-1 flex flex-col">
        {/* <Header /> */}

        <main className="flex-1">
          {children}
        </main>

        {/* <Footer /> */}
      </div>

      <Toaster
        richColors
        position="top-right"
      />
    </div>
  );
}