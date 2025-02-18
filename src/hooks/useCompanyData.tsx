import { useData } from "./useData";
import { CompanyResponse } from "../types/types";

export const useCompanyData = () => useData<CompanyResponse>("data");
