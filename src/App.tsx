import { useState } from "react";
import { CompanyCard } from "./components/CompanyCard";
import { useCompanyData } from "./hooks/useCompanyData";
import { ViewSwitch } from "./components/ViewSwitch";
import { CompanyListItem } from "./components/CompanyListItem";
import "./App.css";

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
        <ul className="flex flex-col gap-6">
          {data.map((data) => (
            <li key={data.id}>
              <CompanyListItem {...data} />
            </li>
          ))}
        </ul>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data.map((data) => (
            <li key={data.id}>
              <CompanyCard {...data} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
