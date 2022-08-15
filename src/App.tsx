import React from "react";
import { withHoc } from "./Hoc";
import { MainComponent, MainProps } from "./Main";

const MainWithHoc = withHoc<MainProps>(MainComponent);

function App() {
  const [counter, setCounter] = React.useState(0);
  return <MainWithHoc counter={counter} onCounterChange={setCounter} hocLabel="Hoc Label" />;
}

export default App;
