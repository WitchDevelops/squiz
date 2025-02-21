import { Cloud, SearchX } from "lucide-react";
import { FiltersType } from "@/types/types";

export const NoDataFound = ({ setFilters }: { setFilters: (filters: FiltersType) => void }) => {
  return (
    <div className="min-h-[50vh] flex flex-col gap-4 justify-center items-center">
      <p className="text text-center">No companies found.</p>
      <button onClick={() => window.location.reload()}>
        <Cloud size={50} color="var(--color-accent)" />
        Yell at cloud
      </button>
      <button onClick={() => setFilters({ country: "", industry: "" })}>
        <SearchX size={50} color="var(--color-accent)" />
        Clear the filters and try again
      </button>
    </div>
  );
};
