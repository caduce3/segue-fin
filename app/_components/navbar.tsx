"use client";

import { UserButton } from "@clerk/nextjs";
import { Radar } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex justify-between border-b border-solid px-8 py-4">
      <div className="flex items-center gap-10">
        <div className="flex mr-10">
          <Radar size={35} className="mr-2 text-[#E2B815]" />
          <h1 className="text-2xl font-bold">Segue.ai</h1>
        </div>
        <Link
          href="/"
          className={
            pathname === "/"
              ? "font-bold text-primary"
              : "text-muted-foreground"
          }
        >
          Dashboard
        </Link>
        <Link
          href="/transactions"
          className={
            pathname === "/transactions"
              ? "font-bold text-primary"
              : "text-muted-foreground"
          }
        >
          Finanças
        </Link>
        <Link
          href="/subscription"
          className={
            pathname === "/subscription"
              ? "font-bold text-primary"
              : "text-muted-foreground"
          }
        >
          Assinatura
        </Link>
      </div>
      <UserButton showName />
    </nav>
  );
};

export default Navbar;
