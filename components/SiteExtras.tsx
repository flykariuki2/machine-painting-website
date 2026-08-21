"use client";

import { usePathname } from "next/navigation";

import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MachineChatbot from "@/components/MachineChatbot";
import SiteFooter from "@/components/SiteFooter";

export default function SiteExtras() {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;

  return (
    <>
      <SiteFooter />
      <FloatingWhatsApp />
      <MachineChatbot />
    </>
  );
}
