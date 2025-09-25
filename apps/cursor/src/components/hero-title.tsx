"use client";

import { formatNumber } from "@/utils/format";
import Link from "next/link";

export function HeroTitle({ totalUsers }: { totalUsers: number }) {
  const text = `Alătură-te comunității Cursor cu peste ${formatNumber(totalUsers)} membri`;

  return (
    <div className="text-center mb-8">
      <Link href="/login">
        <h1
          className="text-[21px] mb-2"
          style={{
            opacity: 0,
            animation: "fadeIn 0.2s ease forwards",
          }}
        >
          {text}
        </h1>
      </Link>

      <p
        className="text-[#878787] text-sm max-w-[620px] mx-auto"
        style={{
          opacity: 0,
          animation: "fadeIn 0.2s ease forwards 0.1s",
        }}
      >
        Locul pentru pasionații de Cursor unde poți explora și {" "}
        <Link href="/generate" className="border-b border-border border-dashed">
          genera
        </Link>{" "}
        reguli, răsfoi {" "}
        <Link href="/mcp" className="border-b border-border border-dashed">
          MCP-uri
        </Link>
        , a publica și urmări cele mai noi noutăți pe board, a învăța, a te conecta și a
        descoperi {" "}
  <Link href="/" className="border-b border-border border-dashed">
          joburi
        </Link>{" "}
        — totul într-un singur loc.
      </p>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
