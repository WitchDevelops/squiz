import { FiltersType, SortOrderType } from "@/types/types";

interface FilterAndSortControlsProps {
  filters: FiltersType;
  setFilters: (filters: FiltersType) => void;
  sortOrder: SortOrderType;
  setSortOrder: (sortOrder: SortOrderType) => void;
  availableCountries: string[];
  availableIndustries: string[];
}
export const FilterAndSortControls: React.FC<FilterAndSortControlsProps> = ({
  filters,
  setFilters,
  sortOrder,
  setSortOrder,
  availableCountries,
  availableIndustries,
}) => {
  return (
    <div className="flex flex-col lg:flex-row gap-2 mb-4 justify-between">
      <div className="flex flex-col md:flex-row  gap-2">
        <select
          className="filter-sort-option"
          value={filters.country}
          onChange={(e) => setFilters({ ...filters, country: e.target.value })}
        >
          <option value="">All Countries</option>
          {availableCountries?.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
        <select
          className="filter-sort-option"
          value={filters.industry}
          onChange={(e) => setFilters({ ...filters, industry: e.target.value })}
        >
          <option value="">All Industries</option>
          {availableIndustries?.map((industry) => (
            <option key={industry} value={industry}>
              {industry}
            </option>
          ))}
        </select>
        <select
          className="filter-sort-option"
          value={sortOrder.key}
          onChange={(e) => setSortOrder({ ...sortOrder, key: e.target.value })}
        >
          <option value="name">Sort by Name</option>
          <option value="numberOfEmployees">Sort by Employees</option>
        </select>
      </div>
      <div className="flex gap-2">
        <button
          className="sortDir-button"
          onClick={() => setSortOrder({ ...sortOrder, ascending: !sortOrder.ascending })}
        >
          {sortOrder.ascending ? "Ascending" : "Descending"}
        </button>
        <button className="clear-button" onClick={() => setFilters({ country: "", industry: "" })}>
          Clear
        </button>
      </div>
    </div>
  );
};
