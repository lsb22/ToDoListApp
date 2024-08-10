import { SimpleGrid } from "@chakra-ui/react";
import { Todos } from "../hooks/useTodoos";
import CompletedCard from "./CompletedCard";

interface Props {
  tasks: Todos[];
}

const CompletedTasks = ({ tasks }: Props) => {
  return (
    <SimpleGrid columns={{ sm: 2, xl: 3 }}>
      <ul>
        {tasks.map((task) => (
          <CompletedCard task={task} />
        ))}
      </ul>
    </SimpleGrid>
  );
};

export default CompletedTasks;
