import { useEffect, useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import { axios } from "./config/axios";

function App() {
  const [todos, setTodos] = useState([]);
  const [formData, setFormData] = useState({});

  const getTodos = async () => {
    const response = await axios
      .get("/todos")
      .catch((error) => console.log("there was an error", error));
    setTodos(response.data);
  };

  useEffect(() => {
    getTodos();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  console.log("data from form", formData);

  const addTodo = async (e) => {
    e.preventDefault();

    const response = await axios
      .post("/posts", formData)
      .catch((error) => console.log("error", error));
    if (response) {
      getTodos();
    }
  };

  return (
    <div className="App">
      <form onSubmit={addTodo}>
        <input
          name="todo"
          type="text"
          placeholder="enter todo"
          onChange={handleChange}
        />
        <input
          name="userId"
          type="text"
          placeholder="enter user id"
          onChange={handleChange}
        />
        <input
          name="completed"
          type="text"
          placeholder="status"
          onChange={handleChange}
        />
        <button>insert</button>
      </form>
      {todos &&
        todos.map((todo, index) => (
          <div key={index} className="item">
            <TodoList {...todo} />
          </div>
        ))}
    </div>
  );
}

export default App;
