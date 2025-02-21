import { useState, useEffect } from "react";
import { useCompanyData } from "@/hooks/useCompanyData";
import { ViewSwitch } from "@/components/ViewSwitch";
import { ModeSwitch } from "@/components/ModeSwitch";
import { ListView } from "@/components/ListView";
import { GridView } from "@/components/GridView";
import { ListSkeleton } from "@/components/ListSkeleton";
import { GridSkeleton } from "@/components/GridSkeleton";
import { APIError } from "@/components/APIError";
import { FilterAndSortControls } from "@/components/FilterAndSortControls";
import { filterAndSortData } from "@/utils/filterAndSort";
import "@/App.css";

const App = () => {
  const { data = [], isLoading, error } = useCompanyData();
  const [filters, setFilters] = useState({ country: "", industry: "" });
  const availableCountries = [...new Set(data.map((item) => item.country))];
  const availableIndustries = [...new Set(data.map((item) => item.industry))];
  const [sortOrder, setSortOrder] = useState({ key: "name", ascending: true });
  const filteredAndSortedData = filterAndSortData(data, filters, sortOrder);
  const [isListView, setIsListView] = useState(() => {
    return JSON.parse(localStorage.getItem("isListView") ?? "true");
  });

  useEffect(() => {
    localStorage.setItem("isListView", JSON.stringify(isListView));
  }, [isListView]);

  return (
    <div className="h-[100vh] bg-background text-foreground p-4 w-[90vw] max-w-[992px] mx-auto">
      <div className="flex justify-end gap-2 mb-4">
        <ModeSwitch />
        <ViewSwitch isListView={isListView} onToggle={() => setIsListView(!isListView)} />
      </div>
      <div>
        <FilterAndSortControls
          filters={filters}
          setFilters={setFilters}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          availableCountries={availableCountries}
          availableIndustries={availableIndustries}
        />
      </div>

      {isLoading ? (
        isListView ? (
          <ListSkeleton />
        ) : (
          <GridSkeleton />
        )
      ) : error ? (
        <APIError error={error} />
      ) : filteredAndSortedData.length === 0 ? (
        <p>No data found.</p>
      ) : isListView ? (
        <ListView data={filteredAndSortedData} />
      ) : (
        <GridView data={filteredAndSortedData} />
      )}
    </div>
  );
};

export default App;
