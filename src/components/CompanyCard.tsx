import React from "react";
import { Company } from "../types/types";
import { Building2 } from "lucide-react";

export const CompanyCard: React.FC<Company> = ({ name, country, industry, numberOfEmployees }) => {
  return (
    <div className="company-card-item">
      <Building2 size={60} color="var(--color-primary)" />
      <p className="company-card-item__name">{name}</p>
      <p className="company-card-item__industry">{industry}</p>

      <div className="company-card-item__info-container">
        <div className="company-card-item__info">
          <p className="company-card-item__country">Country</p>
          <p className="">{country}</p>
        </div>
        <div className="company-card-item__info">
          <p className="company-card-item__employees">Employees</p>
          <p className="comapny-card-item__text">{numberOfEmployees}</p>
        </div>
      </div>
    </div>
  );
};
