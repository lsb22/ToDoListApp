import useTodoos from "../hooks/useTodoos";

export interface Todos {
  name: string;
  description: string;
  date: string;
}

const ToDoLIst = () => {
  const { toDoos } = useTodoos();

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
