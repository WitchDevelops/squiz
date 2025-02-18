import React from "react";
import { CompanyCard } from "./components/CompanyCard";

const dummyData = [
  {
    id: 1,
    name: "Centidel",
    country: "United States",
    industry: "Telecommunications Equipment",
    numberOfEmployees: 60,
  },
  {
    id: 2,
    name: "Dynazzy",
    country: "Indonesia",
    industry: "Department/Specialty Retail Stores",
    numberOfEmployees: 70,
  },
];

const App = () => {
  return (
    <div className="h-[100vh] bg-background text-foreground p-4 w-[90vw] max-w-[992px] mx-auto">
      <div className="flex flex-col gap-6">
        {dummyData.map((data) => (
          <CompanyCard
            key={data.id}
            name={data.name}
            country={data.country}
            industry={data.industry}
            numberOfEmployees={data.numberOfEmployees}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
