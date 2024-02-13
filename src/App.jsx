import { useState, useRef, useReducer, useEffect } from "react";
import ThemeButton from "./components/ThemeButton";
import DigitButton from "./components/DigitButton";
import OperationButton from "./components/OperationButton";
import { formatOperand } from "./utilities/number";

import { ACTIONS } from "./data/ACTIONS";

const themes = ["dark-blue", "light-gray", "dark-violet"];

function App() {
  const [selectTheme, setTheme] = useState(0);
  const toggleRef = useRef(null);

  useEffect(() => {
    document.querySelector("body").setAttribute("class", themes[selectTheme]);
  }, [selectTheme]);

  const defaultState = {
    currentOperand: "0",
    previousOperand: null,
    operation: null,
  };

  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    defaultState
  );

  function ChangeTheme() {
    const newThemeIndex = (selectTheme + 1) % themes.length;
    setTheme(newThemeIndex);
    MoveToggle(newThemeIndex);
  }

  function ChangeThemeTo(index) {
    setTheme(index);
    MoveToggle(index);
  }

  function MoveToggle(themeIndex) {
    if (themeIndex === 0) {
      const toggle = toggleRef.current;
      toggle.style.transform = "translateX(0px)";
    } else if (themeIndex === 1) {
      const toggle = toggleRef.current;
      toggle.style.transform = "translateX(24px)";
    } else if (themeIndex === 2) {
      const toggle = toggleRef.current;
      toggle.style.transform = "translateX(48px)";
    }
  }

  function reducer(state, { type, payload }) {
    switch (type) {
      case ACTIONS.ADD_DIGIT:
        if (state.overwrite) {
          if (payload.digit === ".") {
            return {
              ...state,
              previousOperand: null,
              overwrite: false,
              currentOperand: "0.",
            };
          }

          return {
            ...state,
            previousOperand: null,
            overwrite: false,
            currentOperand: payload.digit,
          };
        }

        if (payload.digit === "0" && state.currentOperand === "0") {
          return state;
        }

        if (payload.digit === "." && state.currentOperand.includes(".")) {
          return state;
        }

        if (payload.digit !== "." && state.currentOperand === "0") {
          return {
            ...state,
            currentOperand: payload.digit,
          };
        }

        return {
          ...state,
          currentOperand: `${state.currentOperand || ""}${payload.digit}`,
        };
      case ACTIONS.REMOVE_DIGIT:
        if (state.overwrite) {
          return defaultState;
        }

        if (state.currentOperand.length === 1) {
          return {
            ...state,
            currentOperand: "0",
          };
        }

        return {
          ...state,
          currentOperand: state.currentOperand.slice(0, -1),
        };
      case ACTIONS.CHOOSE_OPERATION:
        if (state.overwrite) {
          return {
            ...state,
            previousOperand: state.currentOperand,
            operation: payload.operation,
            currentOperand: "0",
            overwrite: false,
          };
        }

        if (state.currentOperand == null && state.previousOperand == null) {
          return state;
        }

        if (state.currentOperand == null) {
          return {
            ...state,
            operation: payload.operation,
          };
        }

        if (state.previousOperand == null) {
          return {
            ...state,
            operation: payload.operation,
            previousOperand: state.currentOperand,
            currentOperand: "0",
          };
        }

        return {
          ...state,
          operation: payload.operation,
          previousOperand: evaluate(state),
          currentOperand: "0",
        };
      case ACTIONS.RESET:
        return defaultState;
      case ACTIONS.EVALUATE:
        if (state.operation == null) {
          return state;
        }

        return {
          ...state,
          currentOperand: evaluate(state),
          previousOperand: `${
            state.previousOperand ? state.previousOperand : ""
          } ${state.operation ? state.operation : ""} ${state.currentOperand}`,
          operation: null,
          overwrite: true,
        };
    }
  }

  function evaluate({ currentOperand, previousOperand, operation }) {
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);

    if (isNaN(prev)) return currentOperand;

    let computation = "";

    switch (operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "/":
        computation = prev / current;
        break;
    }

    return computation.toString();
  }

  return (
    <>
      <div className="grid sm:grid-cols-[540px] sm:max-w-none max-w-[375px] grid-cols-1 justify-center items-center gap-y-6 mt-24 sm:mx-0 mx-auto sm:px-0 px-6">
        <div className="header flex justify-between">
          <div
            className={`title text-current-num-${themes[selectTheme]} transition-colors mt-4`}
          >
            calc
          </div>
          <ThemeButton
            selectedTheme={`${themes[selectTheme]}`}
            onThemeSelect={ChangeThemeTo}
            onToggleClick={ChangeTheme}
            toggleRef={toggleRef}
          />
        </div>
        <div
          className={`output flex flex-col justify-center items-end bg-screen-${themes[selectTheme]} transition-colors sm:px-8 px-[26px] py-6 w-full sm:min-h-[128px] min-h-[88px] text-right rounded-lg break-all`}
        >
          <div
            className={`previous-operand text-current-num-${themes[selectTheme]} transition-colors text-lg`}
          >
            {formatOperand(previousOperand)} {operation}
          </div>
          <div
            className={`current-operand text-current-num-${themes[selectTheme]} transition-colors`}
          >
            {formatOperand(currentOperand)}
          </div>
        </div>
        <div
          className={`input-grid grid grid-cols-4 sm:gap-x-6 sm:gap-y-7 gap-x-[13px] gap-y-[17px] sm:p-8 p-6 bg-keypad-${themes[selectTheme]} transition-colors rounded-lg`}
        >
          <DigitButton
            selectedTheme={`${themes[selectTheme]}`}
            digit="7"
            dispatch={dispatch}
          />
          <DigitButton
            selectedTheme={`${themes[selectTheme]}`}
            digit="8"
            dispatch={dispatch}
          />
          <DigitButton
            selectedTheme={`${themes[selectTheme]}`}
            digit="9"
            dispatch={dispatch}
          />
          <button
            className={`text-delete-text-${themes[selectTheme]} sm:text-[32px] text-xl bg-delete-key-${themes[selectTheme]} hover:bg-delete-key-hover-${themes[selectTheme]} rounded-lg shadow-delete-key-shadow-${themes[selectTheme]} pt-2 pb-1 transition active:translate-y-1 active:shadow-none`}
            onClick={() => dispatch({ type: ACTIONS.REMOVE_DIGIT })}
          >
            DEL
          </button>
          <DigitButton
            selectedTheme={`${themes[selectTheme]}`}
            digit="4"
            dispatch={dispatch}
          />
          <DigitButton
            selectedTheme={`${themes[selectTheme]}`}
            digit="5"
            dispatch={dispatch}
          />
          <DigitButton
            selectedTheme={`${themes[selectTheme]}`}
            digit="6"
            dispatch={dispatch}
          />
          <OperationButton
            selectedTheme={`${themes[selectTheme]}`}
            operation="+"
            dispatch={dispatch}
          />
          <DigitButton
            selectedTheme={`${themes[selectTheme]}`}
            digit="1"
            dispatch={dispatch}
          />
          <DigitButton
            selectedTheme={`${themes[selectTheme]}`}
            digit="2"
            dispatch={dispatch}
          />
          <DigitButton
            selectedTheme={`${themes[selectTheme]}`}
            digit="3"
            dispatch={dispatch}
          />
          <OperationButton
            selectedTheme={`${themes[selectTheme]}`}
            operation="-"
            dispatch={dispatch}
          />
          <DigitButton
            selectedTheme={`${themes[selectTheme]}`}
            digit="."
            dispatch={dispatch}
          />
          <DigitButton
            selectedTheme={`${themes[selectTheme]}`}
            digit="0"
            dispatch={dispatch}
          />
          <OperationButton
            selectedTheme={`${themes[selectTheme]}`}
            operation="/"
            dispatch={dispatch}
          />
          <OperationButton
            selectedTheme={`${themes[selectTheme]}`}
            operation="*"
            dispatch={dispatch}
          />
          <button
            className={`col-span-2 text-delete-text-${themes[selectTheme]} sm:text-[32px] text-xl bg-delete-key-${themes[selectTheme]} hover:bg-delete-key-hover-${themes[selectTheme]} rounded-lg shadow-delete-key-shadow-${themes[selectTheme]} pt-2 pb-1 transition active:translate-y-1 active:shadow-none`}
            onClick={() => dispatch({ type: ACTIONS.RESET })}
          >
            RESET
          </button>
          <button
            className={`col-span-2 text-result-text-${themes[selectTheme]} bg-toggle-${themes[selectTheme]} hover:bg-toggle-hover-${themes[selectTheme]} rounded-lg shadow-result-key-shadow-${themes[selectTheme]} pt-2 pb-1 transition active:translate-y-1 active:shadow-none`}
            onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
          >
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
