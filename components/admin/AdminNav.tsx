"use client";

import { LayoutDashboard, Paintbrush, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/clients", label: "Clients", icon: Users },
  { href: "/admin/painters", label: "Painters", icon: Paintbrush },
];

export default function AdminNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Admin navigation" className="flex min-w-max items-center gap-1">
      {links.map(({ href, label, icon: Icon }) => {
        const active = pathname === href;

        return (
          <Link
            key={href}
            href={href}
            aria-current={active ? "page" : undefined}
            className={[
              "inline-flex min-h-10 items-center gap-2 border-b-2 px-3 text-xs font-extrabold transition md:px-4 md:text-sm",
              active
                ? "border-[#f5b400] bg-white/10 text-[#f5b400]"
                : "border-transparent text-white/75 hover:bg-white/5 hover:text-white",
            ].join(" ")}
          >
            <Icon aria-hidden="true" className="h-4 w-4" strokeWidth={2.3} />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
