"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { z } from "zod";
import { authActionClient } from "./safe-action";

export const createJobListingAction = authActionClient
  .metadata({
    actionName: "create-job-listing",
  })
  .schema(
    z.object({
      title: z.string(),
      company_id: z.string(),
      location: z.string().nullable(),
      description: z.string(),
      link: z.string().url(),
      workplace: z.enum(["On site", "Remote", "Hybrid"]),
      experience: z.string().nullable(),
    }),
  )
  .action(
    async ({
      parsedInput: {
        title,
        company_id,
        location,
        description,
        link,
        workplace,
        experience,
      },
      ctx: { email, name },
    }) => {
      const supabase = await createClient();

      const { data, error } = await supabase
        .from("jobs")
        .insert({
          title,
          company_id,
          location,
          description,
          link,
          workplace,
          experience,
          // Free flow: default to standard plan and publish immediately
          plan: "standard",
          active: true,
          order: 0,
        })
        .select("id")
        .single();

      if (error) {
        throw new Error(error.message);
      }

  // No payment required; redirect to jobs list at root
  redirect("/");
    },
  );
