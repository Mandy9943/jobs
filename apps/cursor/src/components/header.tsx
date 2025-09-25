"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense, useState } from "react";
import { CommandMenu } from "./command-menu";
import { MobileMenu } from "./mobile-menu";
import { UserMenu } from "./user-menu";

const navigationLinks = [{ href: "/", label: "Jobs" }] as const;

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const mainNavItems = navigationLinks;

  return (
    <div className="flex justify-between items-center mt-2 md:mt-0">
      <div className="md:fixed z-20 flex justify-between items-center top-0 px-6 py-2 w-full bg-background backdrop-filter backdrop-blur-sm bg-opacity-30">
        <Link href="/" className="font-medium font-mono text-sm">
          cursor.directory
        </Link>

        <div className="hidden md:flex items-center gap-5">
          {mainNavItems.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-2 text-sm font-medium",
                pathname.includes(link.href)
                  ? "text-primary"
                  : "text-[#878787]",
              )}
            >
              {link.label}
            </Link>
          ))}

          <Suspense fallback={null}>
            <UserMenu />
          </Suspense>
        </div>
      </div>
      <MobileMenu />
      <CommandMenu open={open} setOpen={setOpen} />
    </div>
  );
}
