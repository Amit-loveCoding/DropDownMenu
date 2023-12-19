import DropDown from "./components/DropDown/DropDown";
import { useState } from "react";

function App() {
  const [selected, setSelected] = useState("");
  return (
    <div className="App">
      <DropDown selectd={selected} setSelected={setSelected} />
    </div>
  );
}

export default App;
