import React from "react";
import { Building2 } from "lucide-react";
import { Company } from "@/types/types";
import { Tooltip } from "react-tooltip";

export const CompanyCard: React.FC<Company> = ({ name, country, industry, numberOfEmployees }) => {
  return (
    <>
      <div className="company-card-item" data-tooltip-id={`company-card-item-tooltip-${name}`}>
        <Building2 size={60} color="var(--color-primary)" />
        <p className="company-card-item__name">{name}</p>
        <p className="company-card-item__industry">{industry}</p>

        <div className="company-card-item__info-container">
          <div className="company-card-item__info">
            <p className="company-card-item__country">Country</p>
            <p>{country}</p>
          </div>
          <div className="company-card-item__info">
            <p className="company-card-item__employees">Employees</p>
            <p>{numberOfEmployees}</p>
          </div>
        </div>
      </div>
      <Tooltip id={`company-card-item-tooltip-${name}`} className="text-center">
        <p>{name}</p>
        <p>{industry}</p>
      </Tooltip>
    </>
  );
};
