function ThemeButton({ selectedTheme, onClick }) {
  return (
    <div className="toggle-button flex items-end gap-x-6">
      <div className={`text-xs text-current-num-${selectedTheme}`}>THEME</div>
      <div className="grid grid-cols-[24px,24px,24px] text-center">
        <label
          htmlFor="theme1"
          className={`text-xs text-current-num-${selectedTheme}`}
        >
          1
        </label>
        <label
          htmlFor="theme2"
          className={`text-xs text-current-num-${selectedTheme}`}
        >
          2
        </label>
        <label
          htmlFor="theme3"
          className={`text-xs text-current-num-${selectedTheme}`}
        >
          3
        </label>
        <input
          type="radio"
          id="theme1"
          name="theme"
          defaultChecked
          className="appearance-none"
        />
        <input
          type="radio"
          id="theme2"
          name="theme"
          className="appearance-none"
        />
        <input
          type="radio"
          id="theme3"
          name="theme"
          className="appearance-none"
        />
        <div
          className={`slider col-span-3 bg-keypad-${selectedTheme} w-full h-[26px] rounded-3xl`}
          onClick={onClick}
        >
          <div
            className={`w-4 h-4 bg-toggle-${selectedTheme} hover:bg-toggle-hover-${selectedTheme} rounded-full mt-[5px] ml-1`}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default ThemeButton;
