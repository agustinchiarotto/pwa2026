import { useEffect, useState } from "react";
import "./App.css";
import { Titulo } from "./components/Titulo/Titulo";
import { CharacterCard } from "./components/CharacterCard/CharacterCard";
import { Input } from "./components/Input/Input";
import { CheckBox } from "./components/Checkbox/Checkbox";

const holaMundo = "Hola Mundo!";

const epicCharacters = [
  {
    name: "Tharok Ironfang",
    race: "Half-Orc",
    class: "Barbarian",
    level: 8,
    weapon: "Greataxe of the Storm",
    trait: "Fearless warrior with a thunderous battle cry",
  },
  {
    name: "Elandra Moonshadow",
    race: "Elf",
    class: "Sorcerer",
    level: 9,
    weapon: "Staff of Arcane Flames",
    trait: "Mystical mage who bends fire and shadow to her will",
  },
  {
    name: "Bromric Stoneheart",
    race: "Dwarf",
    class: "Paladin",
    level: 7,
    weapon: "Hammer of the Sacred Oath",
    trait: "Holy defender sworn to protect the ancient kingdoms",
  },
];

function App() {
  const saludo = "27.456.000 pesos por mes";

  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [filtroPaladin, setFiltroPaladin] = useState(false);

  console.log("Render....");
  // console.log("inputValue en app: ", inputValue);
  // console.log("filtroPaladin: ", filtroPaladin);

  const filteredCharacters = epicCharacters.filter((character) => {
    return character.name.toLowerCase() === inputValue.toLowerCase();
  });

  const paladines = epicCharacters.filter((character) => {
    return filtroPaladin ? character.class === "Paladin" : true;
  });

  useEffect(() => {
    document.title = saludo;
  }, []);

  useEffect(() => {
    //filtro...
  }, [inputValue]);

  const onChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div style={{ display: "flex ", flexDirection: "column", gap: 18 }}>
      <h1 className="saludo">{saludo}</h1>
      <Titulo texto="Hola Vercel" />
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
      <label>
        <span> Buscar: </span>
        <Input value={inputValue} onChange={onChangeInput} />
      </label>

      <label>
        <CheckBox
          value={filtroPaladin}
          onChange={(e) => {
            console.log(e);
            setFiltroPaladin(e.target.checked);
          }}
        />
        <span>Clase: paladin</span>
      </label>

      <div style={{ display: "flex", gap: 24 }}>
        {paladines.map((character) => {
          return <CharacterCard key={character.name} character={character} />;
        })}
      </div>
    </div>
  );
}

export default App;
