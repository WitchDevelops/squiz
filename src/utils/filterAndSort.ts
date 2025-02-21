import { CompanyResponse, FiltersType, SortOrderType } from "@/types/types";
export const filterAndSortData = (
  data: CompanyResponse[],
  filters: FiltersType,
  sortOrder: SortOrderType
) => {
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
