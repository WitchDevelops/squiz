import { Cloud, SearchX } from "lucide-react";
import { FiltersType } from "@/types/types";

export const NoDataFound = ({ setFilters }: { setFilters: (filters: FiltersType) => void }) => {
  const handleRefreshPage = () => window.location.reload();
  const handleResetFilters = () => setFilters({ country: "", industry: "" });

  return (
    <div className="flex-1 min-h-[50vh] flex flex-col gap-20 justify-center items-center mx-auto w-full">
      <p className="text text-center">No companies found for the given filters.</p>
      <div className="flex flex-col md:flex-row items-center gap-4 w-full justify-center">
        <button className="no-results-button" onClick={handleResetFilters}>
          <SearchX size={50} color="var(--color-accent)" />
          Clear the filters and try again
        </button>
        <button className="no-results-button" onClick={handleRefreshPage}>
          <Cloud size={50} color="var(--color-accent)" />
          Yell at cloud
        </button>
      </div>
    </div>
  );
};
