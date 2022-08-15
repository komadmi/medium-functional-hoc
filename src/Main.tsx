import * as React from "react";

type MainStateProps = {
  counter: number;
};

type MainDispatchProps = {
  onCounterChange: (value: number) => void;
};

export type MainProps = MainStateProps & MainDispatchProps;

export const MainComponent: React.FC<MainProps> = ({ counter, onCounterChange }: MainProps) => {
  const handleClick = React.useCallback(
    () => onCounterChange(++counter),
    [counter, onCounterChange]
  );
  return (
    <div>
      <button onClick={handleClick}>Increase</button>
      <span>Result: {counter}</span>
    </div>
  );
};
