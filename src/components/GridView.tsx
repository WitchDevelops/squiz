import { CompanyCard } from "./CompanyCard";
import { CompanyResponse } from "@/types/types";

export const GridView = ({ data }: { data: CompanyResponse[] }) => {
  return (
    <ul className="grid-view">
      {data.map((data) => (
        <li key={data.id}>
          <CompanyCard {...data} />
        </li>
      ))}
    </ul>
  );
};
