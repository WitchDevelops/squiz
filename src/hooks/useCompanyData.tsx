import { useData } from "@/hooks/useData";
import { CompanyResponse } from "@/types/types";

export const useCompanyData = () => useData<CompanyResponse>("data");
