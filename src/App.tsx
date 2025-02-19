import { useState } from "react";
import { CompanyCard } from "@/components/CompanyCard";
import { useCompanyData } from "@/hooks/useCompanyData";
import { ViewSwitch } from "@/components/ViewSwitch";
import { CompanyListItem } from "@/components/CompanyListItem";
import { ListView } from "@/components/ListView";
import { GridView } from "@/components/GridView";
import "@/App.css";

const App = () => {
  const { data = [], isLoading, error } = useCompanyData();
  const [isListView, setIsListView] = useState(true);

  return (
    <div className="h-[100vh] bg-background text-foreground p-4 w-[90vw] max-w-[992px] mx-auto">
      <div className="flex justify-end mb-4">
        <ViewSwitch isListView={isListView} onToggle={() => setIsListView(!isListView)} />
      </div>

      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : isListView ? (
        <ListView data={data} />
      ) : (
        <GridView data={data} />
      )}
    </div>
  );
};

export default App;
