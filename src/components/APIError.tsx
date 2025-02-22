import { TriangleAlert, RefreshCcw } from "lucide-react";
import { Tooltip } from "react-tooltip";

export const APIError = ({ error: error }: { error: string }) => {
  const handleRefresh = () => window.location.reload();

  return (
    <div className="flex-1 min-h-[50vh] flex flex-col gap-4 justify-center items-center">
      <TriangleAlert size={50} color="var(--color-primary)" />
      <p className="text text-center">
        There was an error retrieving the data:{" "}
        <span className="text-primary uppercase">{error}</span>
      </p>
      <button className="refresh-btn" onClick={handleRefresh} data-tooltip-id="refresh-btn-tooltip">
        <RefreshCcw size={20} className="hover:animate-spin" /> Try again
      </button>
      <Tooltip id="refresh-btn-tooltip">Refresh the page</Tooltip>
    </div>
  );
};
