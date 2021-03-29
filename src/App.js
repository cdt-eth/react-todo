import "./App.css";
import { useState } from "react";
// import TodoForm from "./components/TodoForm";
// import TodoList from "./components/TodoList";
import Employee from "./components/Employee";

function App() {
  const [showCounter, setShowCounter] = useState(false);

  return (
    <div className="todo-app">
      {/* <TodoList /> */}

      <button onClick={() => setShowCounter(!showCounter)}>
        {showCounter ? "Show Counter" : "Hide Counter"}
      </button>

      {showCounter && <Employee />}

      {/* <Employee
        firstname={"Christian"}
        lastname={"Turner"}
        age={28}
        job={"Software Engineer"}
      />

      <Employee firstname={"Alex"} lastname={"Smith"} age={32} job={"ML Ops"} />

      <Employee
        firstname={"Brandon"}
        lastname={"Flowers"}
        age={47}
        job={"CTO"}
      />

      <Employee
        firstname={"Stephanie"}
        lastname={"Johnson"}
        age={30}
        job={"Engineering Manager"}
      /> */}
    </div>
  );
}

export default App;
