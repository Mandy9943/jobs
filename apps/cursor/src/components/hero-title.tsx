"use client";

import { formatNumber } from "@/utils/format";
import Link from "next/link";

export function HeroTitle({ totalUsers }: { totalUsers: number }) {
  const text = `Alătură-te comunității Paylinks Jobs cu peste ${formatNumber(totalUsers)} membri`;

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
        Locul unde freelanceri, creatori și afaceri locale se conectează pentru colaborări reale și plăți rapide.
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
