import axios from "axios";
import { useEffect, useState } from "react";

interface Todos {
  name: string;
  description: string;
  date: string;
}

const ToDoLIst = () => {
  const [toDoos, setToDoos] = useState<Todos[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/toDoos")
      .then((res) => setToDoos(res.data))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <>
      <ul>
        {toDoos.map((todo) => (
          <div key={todo.name}>
            <li>{todo.name}</li>
            <li>{todo.description}</li>
            <li>{todo.date}</li>
          </div>
        ))}
      </ul>
    </>
  );
};

export default ToDoLIst;
