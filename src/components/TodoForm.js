import React, { useState } from "react";

function TodoForm() {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Add a Todo" value={input} name="text" />
      <button className="todo-button"> Add Todo </button>
    </form>
  );
}

export default TodoForm;
