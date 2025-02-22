import { CompanyListItem } from "@/components/CompanyListItem";
import { CompanyResponse } from "@/types/types";

export const ListView = ({ data }: { data: CompanyResponse[] }) => {
  return (
    <ul className="list-view">
      {data.map((item) => (
        <li key={item.id}>
          <CompanyListItem {...item} />
        </li>
      ))}
    </ul>
  );
};
