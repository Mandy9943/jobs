"use client";

import { toggleJobListingAction } from "@/actions/toggle-job-listing";
import { Switch } from "@/components/ui/switch";
import { useOptimisticAction } from "next-safe-action/hooks";
import { toast } from "sonner";

interface JobListingSwitchProps {
  id: number;
  active: boolean;
}

export function JobListingSwitch({ id, active }: JobListingSwitchProps) {
  const { execute, optimisticState } = useOptimisticAction(
    toggleJobListingAction,
    {
      currentState: {
        active,
      },
      updateFn: (currentState, input) => ({
        active: input.active,
      }),
      onSuccess: () => {
        if (optimisticState.active) {
          toast.success("Anunțul de job este acum ascuns");
        } else {
          toast.success("Anunțul de job este acum vizibil");
        }
      },
      onError: () => {
        toast.error("Actualizarea stării anunțului a eșuat");
      },
    },
  );

  const handleToggle = (checked: boolean) => {
    execute({
      id,
      active: checked,
    });
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs font-mono text-[#878787]">
        {optimisticState.active ? "Anunțul este vizibil" : "Anunțul este ascuns"}
      </span>
      <Switch
        checked={optimisticState.active}
        onCheckedChange={handleToggle}
        disabled={false}
        aria-label="Toggle job listing active state"
      />
    </div>
  );
}
