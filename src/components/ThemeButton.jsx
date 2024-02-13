import { useRef } from "react";
import { getNextIndex } from "../utilities/theme";

function ThemeButton({ selectedTheme, selectThemeIndex, setTheme }) {
  const toggleRef = useRef(null);

  function changeThemeTo(index) {
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

  return (
    <div className="toggle-button flex items-center gap-x-6">
      <div className={`text-xs text-current-num-${selectedTheme} mt-5`}>
        THEME
      </div>
      <div className="grid grid-cols-[24px,24px,24px] gap-y-[4px] text-center">
        <button
          className={`text-xs text-current-num-${selectedTheme}`}
          onClick={() => {
            changeThemeTo(0);
          }}
        >
          1
        </button>
        <button
          className={`text-xs text-current-num-${selectedTheme}`}
          onClick={() => {
            changeThemeTo(1);
          }}
        >
          2
        </button>
        <button
          className={`text-xs text-current-num-${selectedTheme}`}
          onClick={() => {
            changeThemeTo(2);
          }}
        >
          3
        </button>
        <div
          className={`relative col-span-3 bg-keypad-${selectedTheme} w-full h-[26px] rounded-3xl`}
          onClick={() => {
            const newIndex = getNextIndex(selectThemeIndex);
            setTheme(newIndex);
            MoveToggle(newIndex);
          }}
        >
          <div
            ref={toggleRef}
            className={`absolute w-4 h-4 mt-[5px] ml-1 bg-toggle-${selectedTheme} hover:bg-toggle-hover-${selectedTheme} rounded-full transition-all duration-200`}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default ThemeButton;
