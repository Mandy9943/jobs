import { AddCompanyButton } from "@/components/company/add-company-button";
import { CompanyList } from "@/components/company/company-list";
import { getCompanies } from "@/data/queries";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Companii care folosesc Cursor | Cursor Directory",
  description: "Un director de companii care folosesc Cursor.",
};

export const revalidate = 3600;

export default async function Page() {
  const { data: companies } = await getCompanies();

  return (
    <div className="max-w-screen-xl mx-auto px-6 py-12 md:mt-24 pb-32">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl mb-2">Răsfoiește companiile</h1>
          <p className="text-sm text-[#878787] mb-8">
            Răsfoiește companiile sau adaugă-ți compania în director.
          </p>
        </div>

        <Suspense fallback={null}>
          <AddCompanyButton redirect={true} />
        </Suspense>
      </div>

      <Suspense fallback={null}>
        <CompanyList data={companies} />
      </Suspense>
    </div>
  );
}
