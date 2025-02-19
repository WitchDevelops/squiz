import React from "react";
import { Company } from "../types/types";
import { Building2 } from "lucide-react";

export const CompanyListItem: React.FC<Company> = ({
  name,
  country,
  industry,
  numberOfEmployees,
}) => {
  return (
    <div className="company-list-item">
      <div className="mx-auto">
        <Building2 size={30} />
      </div>

      <div className="company-list-item__content">
        <p className="company-list-item__name">{name}</p>
        <p className="company-list-item__industry" title={industry}>
          {industry}
        </p>
        <p>Employees: {numberOfEmployees}</p>
      </div>
      <p className="company-list-items__country">{country}</p>
    </div>
  );
};
