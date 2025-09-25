import { JobsFeatured } from "@/components/jobs/jobs-featured";
import { JobsList } from "@/components/jobs/jobs-list";
import { getFeaturedJobs } from "@/data/queries";
import Link from "next/link";

export const metadata = {
  title: "Joburi | Cursor Directory",
  description: "Găsește-ți următorul job cu Cursor Directory",
};

export const revalidate = 3600;

export default async function Page() {
  const { data: featuredJobs } = await getFeaturedJobs();

  return (
    <div className="max-w-screen-xl mx-auto px-6 py-12 md:mt-24 pb-32">
      <h1 className="text-xl mb-2">Joburi recomandate</h1>
      <p className="text-sm text-[#878787] mb-8">
        Răsfoiește pozițiile sau {" "}
        <Link href="/jobs/new" className="border-b border-border border-dashed">
          postează un job pentru a ajunge la peste 250.000 de dezvoltatori activi lunar
        </Link>
        .
      </p>

      <JobsFeatured data={featuredJobs} />
      <JobsList />
    </div>
  );
}
