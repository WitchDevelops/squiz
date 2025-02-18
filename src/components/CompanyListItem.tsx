import React from "react";
import { Company } from "../types/types";

export const CompanyListItem: React.FC<Company> = ({
  name,
  country,
  industry,
  numberOfEmployees,
}) => {
  return (
    <div>
      <p>{name}</p>
      <p>{country}</p>
      <p>{industry}</p>
      <p>{numberOfEmployees}</p>
    </div>
  );
};
