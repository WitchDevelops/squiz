import { CompanyCard } from "./components/CompanyCard";
import { useCompanyData } from "./hooks/useCompanyData";

const App = () => {
  const { data = [], isLoading, error } = useCompanyData();
  return (
    <div className="h-[100vh] bg-background text-foreground p-4 w-[90vw] max-w-[992px] mx-auto">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data.map((data) => (
            <li key={data.id}>
              <CompanyCard
                name={data.name}
                country={data.country}
                industry={data.industry}
                numberOfEmployees={data.numberOfEmployees}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
