import { useState } from "react";
import "./App.css";
import { Titulo } from "./components/Titulo/Titulo";

const holaMundo = "Hola Mundo!";

function App() {
  const saludo = "27.456.000 pesos por mes";

  const [count, setCount] = useState(0);

  console.log(count);

  return (
    <div>
      <h1 className="saludo">{saludo}</h1>
      <Titulo texto={holaMundo} />
      <Titulo texto={holaMundo} />
      <Titulo texto={holaMundo} />

      <Titulo texto={count} />

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click para sumar!
      </button>

      {count > 10 ? "Ganaste" : "Segui participando"}
      {count >= 15 && "Deja de clickear!"}
    </div>
  );
}

export default App;
