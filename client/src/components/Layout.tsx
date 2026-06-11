import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ConsultationWidget from "./ConsultationWidget";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <ConsultationWidget />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
