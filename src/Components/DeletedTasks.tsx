import { SimpleGrid } from "@chakra-ui/react";
import { Todos } from "../hooks/useTodoos";
import DeletedCard from "./DeletedCard";

interface Props {
  tasks: Todos[];
}

const DeletedTasks = ({ tasks }: Props) => {
  return (
    <SimpleGrid columns={{ sm: 2, xl: 3 }} gap={3}>
      {tasks.map((task) => (
        <DeletedCard task={task} key={task.id} />
      ))}
    </SimpleGrid>
  );
};

export default DeletedTasks;
