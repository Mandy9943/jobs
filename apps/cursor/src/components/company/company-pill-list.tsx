import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { Company } from "./company-card";

export function CompanyPillList({ data }: { data?: Company[] | null }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-base font-regular">Companii recomandate</h3>
        <Link
          href="/companies"
          className="text-sm text-[#878787] flex items-center gap-1"
        >
          <span>Vezi toate</span>
          <svg
            width="12"
            height="13"
            viewBox="0 0 12 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_company_list"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="12"
              height="13"
            >
              <rect y="0.5" width="12" height="12" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_company_list)">
              <path
                d="M3.2 9.5L2.5 8.8L7.3 4H3V3H9V9H8V4.7L3.2 9.5Z"
                fill="#878787"
              />
            </g>
          </svg>
        </Link>
      </div>
      <div className="overflow-x-auto hide-scrollbar">
        <motion.div
          className="flex gap-2 pb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, staggerChildren: 0.05 }}
        >
          {data?.map((company, index) => (
            <motion.div
              key={company.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05, ease: "easeOut" }}
            >
              <Link
                href={`/c/${company.slug}`}
                className="px-6 py-2 text-sm rounded-full font-medium whitespace-nowrap flex items-center gap-2 border border-border"
              >
                {company.image && (
                  <Image
                    src={company.image}
                    alt={`Sigla ${company.name}`}
                    width={16}
                    height={16}
                  />
                )}
                <span className="pr-4">{company.name}</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
