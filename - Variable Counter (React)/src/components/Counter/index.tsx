import React, { useState } from "react";
import Actions from "../../constants";

interface ICounterState {
  count: number;
  countHistory: Array<number>;
}

export const Counter = () => {
  const [state, setState] = useState<ICounterState>({
    count: 0,
    countHistory: [0],
  });

  const perfomActionOnCounter = (actionType: string, step: number = 1) => {
    setState((prevState: ICounterState) => {
      const newCountValue =
        actionType === Actions.ADD
          ? prevState.count + step
          : prevState.count - step < 0
          ? 0
          : prevState.count - step;

      return {
        ...prevState,
        count: newCountValue,
        countHistory: [...prevState.countHistory, newCountValue],
      };
    });
  };

  return (
    <div className="counter-wrapper">
      <div className="counter-message">
        <span>{`The current count is: `}</span>
        <span className="counter-value">{state.count}</span>
      </div>
      <div className={"counter-action-buttons"}>
        <button
          type="button"
          className="counter-button"
          onClick={() => perfomActionOnCounter(Actions.ADD, 1)}
        >
          {`Add 1`}
        </button>
        <button
          type="button"
          className="counter-button"
          onClick={() => perfomActionOnCounter(Actions.SUBTRACT, 1)}
        >
          {`Subtract 1`}
        </button>
        <button
          type="button"
          className="counter-button"
          onClick={() => perfomActionOnCounter(Actions.ADD, 5)}
        >
          {`Add 5`}
        </button>
        <button
          type="button"
          className="counter-button"
          onClick={() => perfomActionOnCounter(Actions.SUBTRACT, 5)}
        >
          {`Subtract 5`}
        </button>
      </div>
      <div className="count-history">
        {state.countHistory.length > 0 && (
          <span>History: {state.countHistory.join(", ")}</span>
        )}
      </div>
      <div className="max-from-history">
        <span>
          Max Value from History:{" "}
          {
            (state.countHistory ?? []).sort((a, b) => a - b)?.[
              state.countHistory.length - 1
            ]
          }
        </span>
      </div>
    </div>
  );
};

export default Counter;
