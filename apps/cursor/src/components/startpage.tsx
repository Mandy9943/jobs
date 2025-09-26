"use client";

import type { Section } from "@directories/data/rules";
import { motion } from "motion/react";
import Link from "next/link";
import { useQueryState } from "nuqs";
import { BoardPost } from "./board/board-post";
import type { Company } from "./company/company-card";
import { CompanyPillList } from "./company/company-pill-list";
import { GlobalSearchInput } from "./global-search-input";
import { HeroTitle } from "./hero-title";
import { type Job, JobsFeatured } from "./jobs/jobs-featured";
import { MembersCard } from "./members/members-card";
import { Cursor } from "./ui/cursor";

export function Startpage({
  sections,
  jobs,
  companies,
  totalUsers,
  members,
  popularPosts,
}: {
  sections: Section[];
  jobs?: Job[] | null;
  companies?: Company[] | null;
  totalUsers: number;
  members: unknown[] | null;
  popularPosts: unknown[] | null;
}) {
  const [search] = useQueryState("q", { defaultValue: "" });

  const [sectionsPartOne, ...restSections] = sections;

  return (
    <div>
      <div className="flex flex-col gap-4 w-full relative mx-auto h-screen">
        <div className="transition-all duration-1000">
          <div
            className="flex justify-center items-center mb-8"
            style={{
              opacity: 0,
              animation: "fadeIn 0.05s ease forwards",
            }}
          >
            <Cursor />
          </div>

          <HeroTitle totalUsers={totalUsers} />

          <div className="max-w-[620px] mx-auto w-full mb-14">
            <GlobalSearchInput />
          </div>

          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          >
            <CompanyPillList data={companies} />
          </motion.div>

          {!search && (
            <motion.div
              className="mb-10"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-base font-regular">Joburi recomandate</h3>
                <Link
                  href="/"
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
                      id="mask0_106_981"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="12"
                      height="13"
                    >
                      <rect y="0.5" width="12" height="12" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_106_981)">
                      <path
                        d="M3.2 9.5L2.5 8.8L7.3 4H3V3H9V9H8V4.7L3.2 9.5Z"
                        fill="#878787"
                      />
                    </g>
                  </svg>
                </Link>
              </div>
              <JobsFeatured data={jobs} hidePagination={true} />

         

              <div className="flex justify-between items-center mb-4 mt-10">
                <Link href="/members">
                  <h3 className="text-base font-regular">Membri</h3>
                </Link>
                <Link
                  href="/members"
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
                      id="mask0_106_981"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="12"
                      height="13"
                    >
                      <rect y="0.5" width="12" height="12" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_106_981)">
                      <path
                        d="M3.2 9.5L2.5 8.8L7.3 4H3V3H9V9H8V4.7L3.2 9.5Z"
                        fill="#878787"
                      />
                    </g>
                  </svg>
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {members?.map((member) => (
                  // @ts-ignore
                  <MembersCard key={member.id} member={member} gray />
                ))}
              </div>

             
              <div className="space-y-10">
                {popularPosts?.slice(0, 3).map((post) => (
                  // @ts-ignore
                  <BoardPost key={post.post_id} {...post} />
                ))}
              </div>
            </motion.div>
          )}

         
        </div>
      </div>
    </div>
  );
}
