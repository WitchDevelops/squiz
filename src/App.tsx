import React from "react";
import { ModeSwitch } from "./components/ModeSwitch";

const App = () => {
  return (
    <div className="w-full h-96 bg-background text-foreground p-2.5 flex flex-col items-center justify-center">
      <div>
        <h1>App</h1>
      </div>
      <ModeSwitch />
    </div>
  );
};

export default App;
