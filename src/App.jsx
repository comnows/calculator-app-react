function App() {
  return (
    <>
      <div className="grid grid-cols-[540px] justify-center items-center gap-y-6 mt-24">
        <div className="header flex justify-between items-end">
          <div className="title text-current-num-first">calc</div>
          <div className="toggle-button flex items-end gap-x-6">
            <div className=" text-xs text-current-num-first">THEME</div>
            <div className="grid grid-cols-[24px,24px,24px] text-center">
              <label
                htmlFor="theme1"
                className="text-xs text-current-num-first"
              >
                1
              </label>
              <label
                htmlFor="theme2"
                className="text-xs text-current-num-first"
              >
                2
              </label>
              <label
                htmlFor="theme3"
                className="text-xs text-current-num-first"
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
              <div className="slider col-span-3 bg-keypad-first w-full h-[26px] rounded-3xl">
                <div className="w-4 h-4 bg-toggle-first hover:bg-toggle-hover-first rounded-full mt-[5px] ml-1"></div>
              </div>
            </div>
          </div>
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
          <button className="text-current-num-first bg-delete-key-first hover:bg-delete-key-hover-first rounded-lg shadow-delete-key-shadow-first pt-2 pb-1 transition active:translate-y-1 active:shadow-none">
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
          <button className="col-span-2 text-current-num-first bg-delete-key-first hover:bg-delete-key-hover-first rounded-lg shadow-delete-key-shadow-first pt-2 pb-1 transition active:translate-y-1 active:shadow-none">
            RESET
          </button>
          <button className="col-span-2 text-current-num-first bg-toggle-first hover:bg-toggle-hover-first rounded-lg shadow-result-key-shadow-first pt-2 pb-1 transition active:translate-y-1 active:shadow-none">
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
