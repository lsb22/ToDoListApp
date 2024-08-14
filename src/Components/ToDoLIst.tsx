import { SimpleGrid } from "@chakra-ui/react";
import { Todos } from "../hooks/useTodoos";
import ToDoCard from "./ToDoCard";

interface Props {
  toDoos: Todos[];
  taskCompleted: (id: number) => void;
  taskDeleted: (id: number) => void;
  updateEditedTask: (task: Todos) => void;
}

const ToDoLIst = ({
  toDoos,
  taskCompleted,
  taskDeleted,
  updateEditedTask,
}: Props) => {
  return (
    <>
      <SimpleGrid columns={{ sm: 2, xl: 3 }} gap={3}>
        {toDoos.map((todo) => (
          <ToDoCard
            key={todo.id}
            todo={todo}
            taskCompleted={taskCompleted}
            taskDeleted={taskDeleted}
            updateEditedTask={updateEditedTask}
          />
        ))}
      </SimpleGrid>
    </>
  );
};

export default ToDoLIst;
