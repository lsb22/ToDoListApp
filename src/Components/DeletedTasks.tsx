import { SimpleGrid } from "@chakra-ui/react";
import { Todos } from "../hooks/useTodoos";
import DeletedCard from "./DeletedCard";

interface Props {
  tasks: Todos[];
}

const DeletedTasks = ({ tasks }: Props) => {
  return (
    <SimpleGrid columns={{ sm: 2, xl: 3 }}>
      <ul>
        {tasks.map((task) => (
          <DeletedCard task={task} />
        ))}
      </ul>
    </SimpleGrid>
  );
};

export default DeletedTasks;
