import { useState, useEffect } from "react";
import { useCompanyData } from "@/hooks/useCompanyData";
import { ViewSwitch } from "@/components/ViewSwitch";
import { ListView } from "@/components/ListView";
import { GridView } from "@/components/GridView";
import { ListSkeleton } from "@/components/ListSkeleton";
import { GridSkeleton } from "@/components/GridSkeleton";
import { APIError } from "@/components/APIError";

import "@/App.css";

const App = () => {
  const { data = [], isLoading, error } = useCompanyData();
  const [isListView, setIsListView] = useState(() => {
    return JSON.parse(localStorage.getItem("isListView") ?? "true");
  });

  useEffect(() => {
    localStorage.setItem("isListView", JSON.stringify(isListView));
  }, [isListView]);

  return (
    <div className="h-[100vh] bg-background text-foreground p-4 w-[90vw] max-w-[992px] mx-auto">
      <div className="flex justify-end mb-4">
        <ViewSwitch isListView={isListView} onToggle={() => setIsListView(!isListView)} />
      </div>

      {isLoading ? (
        isListView ? (
          <ListSkeleton />
        ) : (
          <GridSkeleton />
        )
      ) : error ? (
        <APIError error={error} />
      ) : isListView ? (
        <ListView data={data} />
      ) : (
        <GridView data={data} />
      )}
    </div>
  );
};

export default App;
