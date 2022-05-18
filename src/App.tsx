import { Button } from "./components/Button";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { theme } = useTheme();

  return (
    <main
      className={`${theme} container w-screen h-screen max-w-full flex flex-col justify-center items-center text`}
    >
      <div className="flex justify-between items-end w-80">
        <h1 className="text-lg font-bold text-center">Calculator</h1>
        <ThemeSwitcher />
      </div>
      <div
        className={`${theme} keyboard w-80 grid grid-cols-4 grid-rows-5 place-items-center p-4`}
      >
        <Button onClick={() => {}}>7</Button>
        <Button onClick={() => {}}>8</Button>
        <Button onClick={() => {}}>9</Button>
        <Button className="primary" onClick={() => {}}>
          DEL
        </Button>
        <Button onClick={() => {}}>4</Button>
        <Button onClick={() => {}}>5</Button>
        <Button onClick={() => {}}>6</Button>
        <Button onClick={() => {}}>+</Button>
        <Button onClick={() => {}}>1</Button>
        <Button onClick={() => {}}>2</Button>
        <Button onClick={() => {}}>3</Button>
        <Button onClick={() => {}}>-</Button>
        <Button onClick={() => {}}>.</Button>
        <Button onClick={() => {}}>0</Button>
        <Button onClick={() => {}}>/</Button>
        <Button onClick={() => {}}>x</Button>
        <Button onClick={() => {}} className="btn-large primary col-span-2">
          RESET
        </Button>
        <Button onClick={() => {}} className="btn-large secondary col-span-2">
          =
        </Button>
      </div>
    </main>
  );
}

export default App;
