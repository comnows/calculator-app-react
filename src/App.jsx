function App() {
  return (
    <>
      <div className="grid grid-cols-[540px] justify-center items-center gap-y-6 mt-24">
        <div className="header">
          <div className="title text-current-num-first">calc</div>
          <div className="toggle-button"></div>
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
