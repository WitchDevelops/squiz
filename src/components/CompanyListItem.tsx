import React from "react";
import { Building2 } from "lucide-react";
import { Company } from "@/types/types";
import { Tooltip } from "react-tooltip";

export const CompanyListItem: React.FC<Company> = ({
  name,
  country,
  industry,
  numberOfEmployees,
}) => {
  return (
    <>
      <div className="company-list-item" data-tooltip-id={`company-list-item-tooltip-${name}`}>
        <div className="mx-auto">
          <Building2 size={30} color="var(--color-primary)" />
        </div>

        <div className="company-list-item__content">
          <p className="company-list-item__name">{name}</p>
          <p className="company-list-item__industry">{industry}</p>
          <p>Employees: {numberOfEmployees}</p>
        </div>
        <p className="company-list-items__country">{country}</p>
      </div>
      <Tooltip id={`company-list-item-tooltip-${name}`} className="text-center">
        <p>{name}</p>
        <p>{industry}</p>
      </Tooltip>
    </>
  );
};
