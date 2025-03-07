"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav>
      <Link href="/">Home</Link>
      {pathname === "/auth/login" && (
        <Link href="/auth/register" style={{ marginLeft: "1rem" }}>
          Register
        </Link>
      )}
      {pathname === "/auth/register" && (
        <Link href="/auth/login" style={{ marginLeft: "1rem" }}>
          Login
        </Link>
      )}
    </nav>
  );
}


