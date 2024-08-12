import { SimpleGrid } from "@chakra-ui/react";
import { Todos } from "../hooks/useTodoos";
import ImportantCard from "./ImportantCard";

interface Props {
  tasks: Todos[];
}

const ImportantTasks = ({ tasks }: Props) => {
  return (
    <SimpleGrid columns={{ sm: 2, xl: 3 }} gap={3}>
      {tasks.map((task) => (
        <ImportantCard task={task} key={task.id} />
      ))}
    </SimpleGrid>
  );
};

export default ImportantTasks;
