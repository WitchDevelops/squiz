import { CompanyCard } from "./CompanyCard";
import { CompanyResponse } from "@/types/types";

export const GridView = ({ data }: { data: CompanyResponse[] }) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-6 flex-1">
      {data.map((data) => (
        <li key={data.id}>
          <CompanyCard {...data} />
        </li>
      ))}
    </ul>
  );
};
