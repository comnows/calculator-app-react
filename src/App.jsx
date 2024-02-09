import { useState, useRef } from "react";
import ThemeButton from "./components/ThemeButton";

function App() {
  const [selectTheme, setTheme] = useState(0);
  const toggleRef = useRef(null);

  const themes = ["first", "light-gray", "dark-violet"];

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
      toggle.style.left = "4px";
      toggle.style.right = "52px";
    } else if (themeIndex === 1) {
      const toggle = toggleRef.current;
      toggle.style.left = "28px";
      toggle.style.right = "28px";
    } else if (themeIndex === 2) {
      const toggle = toggleRef.current;
      toggle.style.left = "52px";
      toggle.style.right = "4px";
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
          <div className="previous-operand"></div>
          <div className="current-operand text-current-num-first">399,981</div>
        </div>
        <div className="input-grid grid grid-cols-4 gap-x-6 gap-y-7 p-8 bg-keypad-first rounded-lg">
          <button className="text-key-num-first bg-key-first hover:bg-key-hover-first rounded-lg shadow-key-shadow-first pt-2 pb-1 transition active:translate-y-1 active:shadow-none">
            7
          </button>
          <button className="text-key-num-first bg-key-first hover:bg-key-hover-first rounded-lg shadow-key-shadow-first pt-2 pb-1 transition active:translate-y-1 active:shadow-none">
            8
          </button>
          <button className="text-key-num-first bg-key-first hover:bg-key-hover-first rounded-lg shadow-key-shadow-first pt-2 pb-1 transition active:translate-y-1 active:shadow-none">
            9
          </button>
          <button className="text-delete-text-first bg-delete-key-first hover:bg-delete-key-hover-first rounded-lg shadow-delete-key-shadow-first pt-2 pb-1 transition active:translate-y-1 active:shadow-none">
            DEL
          </button>
          <button className="text-key-num-first bg-key-first hover:bg-key-hover-first rounded-lg shadow-key-shadow-first pt-2 pb-1 transition active:translate-y-1 active:shadow-none">
            4
          </button>
          <button className="text-key-num-first bg-key-first hover:bg-key-hover-first rounded-lg shadow-key-shadow-first pt-2 pb-1 transition active:translate-y-1 active:shadow-none">
            5
          </button>
          <button className="text-key-num-first bg-key-first hover:bg-key-hover-first rounded-lg shadow-key-shadow-first pt-2 pb-1 transition active:translate-y-1 active:shadow-none">
            6
          </button>
          <button className="text-key-num-first bg-key-first hover:bg-key-hover-first rounded-lg shadow-key-shadow-first pt-2 pb-1 transition active:translate-y-1 active:shadow-none">
            +
          </button>
          <button className="text-key-num-first bg-key-first hover:bg-key-hover-first rounded-lg shadow-key-shadow-first pt-2 pb-1 transition active:translate-y-1 active:shadow-none">
            1
          </button>
          <button className="text-key-num-first bg-key-first hover:bg-key-hover-first rounded-lg shadow-key-shadow-first pt-2 pb-1 transition active:translate-y-1 active:shadow-none">
            2
          </button>
          <button className="text-key-num-first bg-key-first hover:bg-key-hover-first rounded-lg shadow-key-shadow-first pt-2 pb-1 transition active:translate-y-1 active:shadow-none">
            3
          </button>
          <button className="text-key-num-first bg-key-first hover:bg-key-hover-first rounded-lg shadow-key-shadow-first pt-2 pb-1 transition active:translate-y-1 active:shadow-none">
            -
          </button>
          <button className="text-key-num-first bg-key-first hover:bg-key-hover-first rounded-lg shadow-key-shadow-first pt-2 pb-1 transition active:translate-y-1 active:shadow-none">
            .
          </button>
          <button className="text-key-num-first bg-key-first hover:bg-key-hover-first rounded-lg shadow-key-shadow-first pt-2 pb-1 transition active:translate-y-1 active:shadow-none">
            0
          </button>
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
