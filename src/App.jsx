import "./App.css";
import Counter from "./Components/Counter";
import { useContext } from "react";
import { CounterContext } from "./context/Counter1";
//3)we import the useContext hook in app for reading the context value and we also imported my actual context
function App() {
  const counterState = useContext(CounterContext);
  console.log(counterState);
  return (
    <div className="App">
      <h1>Count is {counterState.count}</h1>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}

export default App;
