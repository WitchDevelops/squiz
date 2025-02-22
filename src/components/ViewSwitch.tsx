import { List, LayoutGrid as Grid } from "lucide-react";
import { Tooltip } from "react-tooltip";

interface ViewSwitchProps {
  isListView: boolean;
  onToggle: () => void;
}

export const ViewSwitch = ({ isListView, onToggle }: ViewSwitchProps) => {
  return (
    <>
      <button
        className="p-2 rounded-md bg-slate-50 dark:bg-slate-700 shadow-md hover:bg-slate-200 dark:hover:bg-slate-600 active:bg-slate-300 dark:active:bg-slate-500 focus:outline-2 focus:outline-offset-2 focus:outline-primary"
        onClick={onToggle}
        data-tooltip-id="view-tooltip"
      >
        {isListView ? <Grid size={20} /> : <List size={20} />}
      </button>
      <Tooltip id="view-tooltip" place="bottom">
        {isListView ? "Switch to grid view" : "Switch to list view"}
      </Tooltip>
    </>
  );
};
