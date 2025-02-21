import { useState } from "react";

export const filterAndSortData = (data, filters, sortOrder) => {
  return data
    .filter(
      (item) =>
        (!filters.country || item.country === filters.country) &&
        (!filters.industry || item.industry === filters.industry)
    )
    .sort((a, b) => {
      if (sortOrder.key === "name") {
        return sortOrder.ascending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
      } else if (sortOrder.key === "numberOfEmployees") {
        return sortOrder.ascending
          ? a.numberOfEmployees - b.numberOfEmployees
          : b.numberOfEmployees - a.numberOfEmployees;
      }
      return 0;
    });
};

export const FilterAndSortControls = ({
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
          className="flex-1 p-2 bg-primary hover:bg-primaryHover active:bg-primaryActive text-white rounded-md"
          onClick={() => setSortOrder({ ...sortOrder, ascending: !sortOrder.ascending })}
        >
          {sortOrder.ascending ? "Ascending" : "Descending"}
        </button>
        <button
          className="flex-1 p-2 bg-accent hover:bg-primaryHover active:bg-primaryActive text-white rounded-md"
          onClick={() => setFilters({ country: "", industry: "" })}
        >
          Clear
        </button>
      </div>
    </div>
  );
};
