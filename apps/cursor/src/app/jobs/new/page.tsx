import { JobForm } from "@/components/forms/job";
import { GithubSignin } from "@/components/github-signin";
import { GoogleSignin } from "@/components/google-signin";
import { getSession } from "@/utils/supabase/auth";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creează un anunț de job | Cursor Directory",
  description:
    "Creează un anunț de job pe Cursor Directory și ajungi astăzi la peste 300k de dezvoltatori.",
};

export default async function Page() {
  const session = await getSession();

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 w-full max-w-sm mx-auto">
        <div className="max-w-md w-full text-center -mt-32">
          <p className="text-md mt-4">
            Conectează-te pentru a publica un anunț de job <br />
            și a ajunge astăzi la peste 300k de dezvoltatori.
          </p>

          <div className="mt-10 flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <GithubSignin redirectTo="/jobs/new" />
              <GoogleSignin redirectTo="/jobs/new" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-screen-sm xl:max-w-screen-sm border-t border-border pt-32 pb-16">
  <h1 className="text-2xl mb-4">Creează un anunț de job</h1>
      <JobForm />
    </div>
  );
}
