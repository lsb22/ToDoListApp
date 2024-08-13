import { useDisclosure } from "@chakra-ui/react";
import EditCard from "./EditCard";
import { Todos } from "../hooks/useTodoos";
import { useEffect } from "react";

interface Props {
  task: Todos;
  handleEdit: () => void;
  updateEditedTask: (task: Todos) => void;
}

const EditTask = ({ task, handleEdit, updateEditedTask }: Props) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  useEffect(() => {
    onOpen();
  }, []);
  return (
    <EditCard
      task={task}
      isOpen={isOpen}
      onClose={onClose}
      updateEditedTask={updateEditedTask}
      handleEdit={handleEdit}
    />
  );
};

export default EditTask;
