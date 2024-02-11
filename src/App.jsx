import { useState, useRef, useReducer } from "react";
import ThemeButton from "./components/ThemeButton";
import DigitButton from "./components/DigitButton";

import { ACTIONS } from "./data/ACTIONS";

function App() {
  const [selectTheme, setTheme] = useState(0);
  const toggleRef = useRef(null);

  const themes = ["first", "light-gray", "dark-violet"];

  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
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
        if (payload.digit === "0" && state.currentOperand === "0") {
          return state;
        }

        if (payload.digit === "." && state.currentOperand.includes(".")) {
          return state;
        }

        return {
          ...state,
          currentOperand: `${state.currentOperand || ""}${payload.digit}`,
        };
      case ACTIONS.REMOVE_DIGIT:
        return;
      case ACTIONS.CHOOSE_OPERATION:
        // if (state.currentOperand == null && state.previousOperand == null) {
        //   return state;
        // }
        return;
      case ACTIONS.RESET:
        return;
    }
  }

  return (
    <>
      <div className="grid grid-cols-[540px] justify-center items-center gap-y-6 mt-24">
        <div className="header flex justify-between items-end">
          <div className="title text-current-num-first">calc</div>
          <ThemeButton
            selectedTheme={`${themes[selectTheme]}`}
            onThemeSelect={ChangeThemeTo}
            onToggleClick={ChangeTheme}
            toggleRef={toggleRef}
          />
        </div>
        <div className="output bg-screen-first px-8 py-6 w-full text-right rounded-lg">
          <div className="previous-operand">123456</div>
          <div className="current-operand text-current-num-first">
            {currentOperand}
          </div>
        </div>
        <div className="input-grid grid grid-cols-4 gap-x-6 gap-y-7 p-8 bg-keypad-first rounded-lg">
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
          <button className="text-delete-text-first bg-delete-key-first hover:bg-delete-key-hover-first rounded-lg shadow-delete-key-shadow-first pt-2 pb-1 transition active:translate-y-1 active:shadow-none">
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
          <button className="text-key-num-first bg-key-first hover:bg-key-hover-first rounded-lg shadow-key-shadow-first pt-2 pb-1 transition active:translate-y-1 active:shadow-none">
            +
          </button>
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
          <button className="text-key-num-first bg-key-first hover:bg-key-hover-first rounded-lg shadow-key-shadow-first pt-2 pb-1 transition active:translate-y-1 active:shadow-none">
            -
          </button>
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
          <button className="text-key-num-first bg-key-first hover:bg-key-hover-first rounded-lg shadow-key-shadow-first pt-2 pb-1 transition active:translate-y-1 active:shadow-none">
            /
          </button>
          <button className="text-key-num-first bg-key-first hover:bg-key-hover-first rounded-lg shadow-key-shadow-first pt-2 pb-1 transition active:translate-y-1 active:shadow-none">
            x
          </button>
          <button className="col-span-2 text-delete-text-first bg-delete-key-first hover:bg-delete-key-hover-first rounded-lg shadow-delete-key-shadow-first pt-2 pb-1 transition active:translate-y-1 active:shadow-none">
            RESET
          </button>
          <button className="col-span-2 text-result-text-first bg-toggle-first hover:bg-toggle-hover-first rounded-lg shadow-result-key-shadow-first pt-2 pb-1 transition active:translate-y-1 active:shadow-none">
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
