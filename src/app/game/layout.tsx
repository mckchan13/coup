import React, { ReactNode } from "react";
import Link from "next/link";

export default function GameLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Link href={"/"}>Home</Link>
      <div>Game Board</div>
      {children}
    </>
  );
}
