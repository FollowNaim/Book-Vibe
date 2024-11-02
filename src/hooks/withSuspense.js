import Spinner from "@/components/loading/Spinner";
import { Suspense } from "react";

export const withSuspense = (component) => {
  return (
    <Suspense fallback={Spinner}>
      <component />
    </Suspense>
  );
};
