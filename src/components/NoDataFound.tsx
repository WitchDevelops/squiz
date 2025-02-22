import { Cloud, SearchX } from "lucide-react";
import { FiltersType } from "@/types/types";
import { Tooltip } from "react-tooltip";
import { useNavigate } from "react-router-dom";

export const NoDataFound = ({ setFilters }: { setFilters: (filters: FiltersType) => void }) => {
  const navigate = useNavigate();
  const handleRefreshPage = () => navigate("/"); // navigates to home without making a new API call
  const handleResetFilters = () => setFilters({ country: "", industry: "" });

  return (
    <div className="flex-1 min-h-[50vh] flex flex-col gap-20 justify-center items-center mx-auto w-full">
      <p className="text text-center">No companies found for the given filters.</p>
      <div className="flex flex-col md:flex-row items-center gap-4 w-full justify-center">
        <button
          className="no-results-button"
          onClick={handleResetFilters}
          data-tooltip-id="clear-filters-btn-tooltip"
        >
          <SearchX size={50} color="var(--color-accent)" />
          Clear the filters and try again
        </button>
        <Tooltip id="clear-filters-btn-tooltip">Reset the filters</Tooltip>
        <button
          className="no-results-button"
          onClick={handleRefreshPage}
          data-tooltip-id="refresh-btn-tooltip"
        >
          <Cloud size={50} color="var(--color-accent)" />
          Yell at cloud
        </button>
        <Tooltip id="refresh-btn-tooltip">Refresh the page</Tooltip>
      </div>
    </div>
  );
};
