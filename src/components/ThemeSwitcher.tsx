import { useTheme } from "../hooks/useTheme";

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();

  const handleThemeSwitch = () => {
    switch (theme) {
      case "dark":
        setTheme("light");
        break;
      case "light":
        setTheme("alternative");
        break;
      case "alternative":
        setTheme("dark");
        break;
      default:
        throw new Error("Invalid theme");
    }
  };

  const getPosition = () => {
    switch (theme) {
      case "dark":
        return "float-left";
      case "light":
        return "mx-auto";
      case "alternative":
        return "float-right";
      default:
        throw new Error("Invalid theme");
    }
  };

  return (
    <div className="flex items-end gap-4">
      <span className="text-[0.6rem] mb-1">THEME</span>
      <div className="flex-col w-12 justify-between">
        <div className="flex justify-between w-full px-1">
          {[1, 2, 3].map((n) => (
            <span key={n} className="text-[0.6rem]">
              {n}
            </span>
          ))}
        </div>
        <button
          className={`${theme} switch w-full h-4 rounded-lg px-[0.2rem]`}
          onClick={handleThemeSwitch}
        >
          <div className={`h-3 w-3 rounded-full ${getPosition()}`}></div>
        </button>
      </div>
    </div>
  );
}
