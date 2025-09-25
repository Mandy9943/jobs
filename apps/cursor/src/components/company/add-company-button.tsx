"use client";

import { parseAsBoolean, useQueryStates } from "nuqs";
import { Button } from "../ui/button";

export function AddCompanyButton({ redirect }: { redirect?: boolean }) {
  const [_, setAddCompany] = useQueryStates({
    addCompany: parseAsBoolean.withDefault(false),
    redirect: parseAsBoolean.withDefault(redirect ?? false),
  });

  return (
    <Button
      type="button"
      variant="outline"
      className="border-border rounded-full"
      onClick={() => setAddCompany({ addCompany: true, redirect })}
    >
      Adaugă companie
    </Button>
  );
}
