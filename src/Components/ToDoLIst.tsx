import { SimpleGrid } from "@chakra-ui/react";
import { Todos } from "../hooks/useTodoos";
import ToDoCard from "./ToDoCard";

interface Props {
  toDoos: Todos[];
}

const ToDoLIst = ({ toDoos }: Props) => {
  return (
    <>
      <SimpleGrid columns={{ sm: 2, lg: 3 }} gap={3}>
        {toDoos.map((todo) => (
          <ToDoCard key={todo.name} todo={todo} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default ToDoLIst;
