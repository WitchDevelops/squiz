import { CompanyCard } from "./CompanyCard";
import { CompanyResponse } from "@/types/types";

export const GridView = ({ data }: { data: CompanyResponse[] }) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {data.map((data) => (
        <li key={data.id}>
          <CompanyCard {...data} />
        </li>
      ))}
    </ul>
  );
};
