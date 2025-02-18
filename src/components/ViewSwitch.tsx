import { List, LayoutGrid as Grid } from "lucide-react";

interface ViewSwitchProps {
  isListView: boolean;
  onToggle: () => void;
}

export const ViewSwitch = ({ isListView, onToggle }: ViewSwitchProps) => {
  return (
    <div className="flex items-center space-x-2">
      <button
        className="p-2 rounded-md bg-gray-200 hover:bg-gray-300 active:bg-gray-300 focus:outline-2 focus:outline-offset-2 focus:outline-primary"
        onClick={onToggle}
      >
        {isListView ? <Grid size={20} /> : <List size={20} />}
      </button>
    </div>
  );
};
