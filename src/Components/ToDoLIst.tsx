import { SimpleGrid } from "@chakra-ui/react";
import { Todos } from "../hooks/useTodoos";
import ToDoCard from "./ToDoCard";

interface Props {
  toDoos: Todos[];
  taskCompleted: (id: number) => void;
}

const ToDoLIst = ({ toDoos, taskCompleted }: Props) => {
  return (
    <>
      <SimpleGrid columns={{ sm: 2, xl: 3 }} gap={3}>
        {/* {toDoos.length} */}
        {toDoos.map((todo) => (
          <ToDoCard key={todo.id} todo={todo} taskCompleted={taskCompleted} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default ToDoLIst;
