import { CompanyListItem } from "@/components/CompanyListItem";
import { CompanyResponse } from "@/types/types";

export const ListView = ({ data }: { data: CompanyResponse[] }) => {
  return (
    <ul className="flex flex-col gap-6 flex-1">
      {data.map((item) => (
        <li key={item.id}>
          <CompanyListItem {...item} />
        </li>
      ))}
    </ul>
  );
};
