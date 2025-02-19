export type Company = {
  name: string;
  country: string;
  industry: string;
  numberOfEmployees: number;
};
export interface CompanyResponse extends Company {
  id: number;
}
