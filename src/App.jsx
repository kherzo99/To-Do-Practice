import { useState } from "react";
import Item from "./components/Item";
import Button from "./components/Button";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  // console.log("App se renderiza");

  // const [contador, setContador] = useState(0);

  //UseEffect es un hook, ejecuta la funcion que le dimos.
  //1. Se ejecuta al terminar de renderizar el componente.
  //2. Cuando cambia 1 de sus dependencias se vuelve a ejecutar.
  // useEffect(() => {
  //   console.log("Use Effect", contador);
  // }, [contador]);

  // useEffect(() => {
  //   console.log("App renderizo");
  // }, []);

  // function onClick() {
  //   setContador(contador + 1);
  //   console.log("contador,", contador);
  // }

  // function looger(event) {
  //   console.log(event.target.value);
  // }

  // function saludar() {
  //   alert("Hola a todos!");
  // }

  function onInputChange(event) {
    setText(event.target.value);
  }

  function onEnterKey(event) {
    if (event.key === `Enter`) {
      addToDo();
    }
  }

  function addToDo() {
    if (text.trim().length > 0) {
      setTodos([text, ...todos]);
      setText("");
    } else {
      alert("Agrega una tarea");
    }
  }

  function onDelete(index) {
    todos.splice(index, 1);
    setTodos([...todos]);
  }

  return (
    <main className="bg-[#0E152C] min-h-screen flex justify-center p-16 ">
      <div className="h-full flex flex-col w-full max-w-[350px] gap-5 bg-[#00BAEB] rounded-lg">
        <p className="text-white">TO-DO List</p>
        <input
          className="bg-white p-2 rounded-full placeholder-black"
          type="text"
          onChange={onInputChange}
          onKeyUp={onEnterKey}
          value={text}
        />
        <Button
          onClick={addToDo}
          className="border border-blue-950 bg-gray-500 rounded-full text-white p-2"
        >
          Agregar
        </Button>
        {todos.map((todo, index) => {
          return (
            <Item
              key={`todo-${index}`}
              text={todo}
              onDelete={() => {
                onDelete(index);
              }}
            />
            // <article className="text-white p-3" key={`todo-${index}`}>
            // {todo}
            // </article>
          );
        })}
      </div>
      {/* <Button onClick={onClick}>+</Button>
      <p>{contador}</p> */}
      {/* <Button text="Hola soy un boton" onClick={onClick}>
        Hola soy un boton
      </Button>
      <Button text="Soy otro boton" onClick={saludar}>
        Soy otro boton
      </Button>
      <Button>Cuerpo del Boton</Button>
      <input className="border border-blue-800" type="text" onChange={looger} /> */}
    </main>
  );
}
