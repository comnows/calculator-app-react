import { ACTIONS } from "../data/ACTIONS";

function DigitButton({ selectedTheme, digit, dispatch }) {
  return (
    <button
      className={`text-key-num-${selectedTheme} bg-key-${selectedTheme} hover:bg-key-hover-${selectedTheme} rounded-lg shadow-key-shadow-${selectedTheme} pt-2 pb-1 transition active:translate-y-1 active:shadow-none`}
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  );
}

export default DigitButton;
