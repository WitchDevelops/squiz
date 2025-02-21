export type Company = {
  name: string;
  country: string;
  industry: string;
  numberOfEmployees: number;
};
export interface CompanyResponse extends Company {
  id: number;
}

export type FiltersType = {
  country: string;
  industry: string;
};

export type SortOrderType = {
  key: string;
  ascending: boolean;
};
