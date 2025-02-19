import { TriangleAlert, RefreshCcw } from "lucide-react";

export const APIError = ({ error: error }: { error: string }) => {
  const handleRefresh = () => window.location.reload();

  return (
    <div className="min-h-[50vh] flex flex-col gap-4 justify-center items-center">
      <TriangleAlert size={50} color="var(--color-primary)" />
      <p className="text-slate-800 text-center">
        There was an error retrieving the data:{" "}
        <span className="text-primary uppercase">{error}</span>
      </p>
      <button className="refresh-btn " onClick={handleRefresh}>
        <RefreshCcw size={20} className="hover:animate-spin" /> Try again
      </button>
    </div>
  );
};
