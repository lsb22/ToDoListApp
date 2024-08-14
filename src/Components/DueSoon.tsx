import { SimpleGrid } from "@chakra-ui/react";
import useSortedTasks from "../hooks/useSortedTasks";
import { Todos } from "../hooks/useTodoos";
import ToDoCard from "./ToDoCard";

interface Props {
  todoArray: Todos[];
  taskCompleted: (id: number) => void;
  taskDeleted: (id: number) => void;
  updateEditedTask: (task: Todos) => void;
}

const DueSoon = ({
  todoArray,
  taskCompleted,
  taskDeleted,
  updateEditedTask,
}: Props) => {
  const tasks = useSortedTasks(todoArray);
  return (
    <SimpleGrid columns={{ sm: 2, xl: 3 }} gap={3}>
      {tasks.map((todo) => (
        <ToDoCard
          key={todo.id}
          todo={todo}
          taskCompleted={taskCompleted}
          taskDeleted={taskDeleted}
          updateEditedTask={updateEditedTask}
        />
      ))}
    </SimpleGrid>
  );
};

export default DueSoon;
