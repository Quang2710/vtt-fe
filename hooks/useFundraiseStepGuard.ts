import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useFundraiseStore } from "@/stores/fundraiseStore";

export function useFundraiseStepGuard(requiredId: number, redirectTo: string) {
  const router = useRouter();
  const answers = useFundraiseStore((state) => state.answers);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (!answers[requiredId]) {
      router.replace(redirectTo);
    } else {
      setChecked(true);
    }
  }, [answers, requiredId, redirectTo, router]);

  return checked;
}