export const themes = ["dark-blue", "light-gray", "dark-violet"];

export function getNextIndex(selectTheme) {
  return (selectTheme + 1) % themes.length
}