"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  exact?: boolean;
  onClick?: () => void;
}

export function NavLink({
  href,
  children,
  className,
  exact = false,
  onClick,
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname.startsWith(href);
  const isHashLink = href.startsWith("#");

  if (isHashLink) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={cn(
          "text-sm font-medium transition-colors hover:text-foreground text-muted-foreground",
          className
        )}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "text-sm font-medium transition-colors hover:text-foreground",
        isActive ? "text-foreground" : "text-muted-foreground",
        className
      )}
    >
      {children}
    </Link>
  );
}
