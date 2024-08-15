import {
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Checkbox,
  HStack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Todos } from "../hooks/useTodoos";
import { DeleteIcon, EditIcon, StarIcon } from "@chakra-ui/icons";
import TrimContent from "./TrimContent";
import ExpandTodoCard from "./ExpandTodoCard";
import { useState } from "react";
import EditTask from "./EditTask";

interface Props {
  todo: Todos;
  key: number;
  taskCompleted: (id: number) => void;
  taskDeleted: (id: number) => void;
  updateEditedTask: (task: Todos) => void;
}

const ToDoCard = ({
  todo,
  taskCompleted,
  taskDeleted,
  updateEditedTask,
}: Props) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [editMenu, setEditMenu] = useState(false);
  const new_date = new Date(todo.date);
  const month = new_date.toLocaleString("default", { month: "long" });
  const day = new_date.getDate();
  const year = new_date.getFullYear();
  const hours = new_date.getHours();
  const minutes = new_date.getMinutes();
  const time = hours >= 12 ? "PM" : "AM";
  const full_time =
    " " +
    month +
    " " +
    day +
    ", " +
    year +
    " " +
    hours +
    ":" +
    minutes +
    " " +
    time;
  const handleEdit = () => {
    setEditMenu(!editMenu);
  };

  return (
    <Card
      boxShadow="2xl"
      border="1px"
      sx={{
        borderImage: "linear-gradient(120deg, #2C5F2D,#97BC62FF)",
        borderImageSlice: 1,
      }}
    >
      <CardHeader>
        <ExpandTodoCard
          task={todo}
          isOpen={isOpen}
          onClose={onClose}
          time={full_time}
        />
        <HStack justifyContent="space-between">
          <HStack>
            <Checkbox size="md" onChange={() => taskCompleted(todo.id)} />
            <Badge ml={1} fontSize="sm" fontWeight="bold" colorScheme="teal">
              {todo.name}
            </Badge>
            {todo.important && <StarIcon color="gold" />}
          </HStack>
          <HStack>
            <EditIcon
              color="violet"
              mr={2}
              _hover={{ color: "teal", boxSize: 5 }}
              boxSize={3}
              onClick={() => setEditMenu(!editMenu)}
            />
            {editMenu && (
              <EditTask
                task={todo}
                handleEdit={handleEdit}
                updateEditedTask={updateEditedTask}
              />
            )}
            <DeleteIcon
              onClick={() => taskDeleted(todo.id)}
              color="red"
              _hover={{ color: "red.700" }}
              boxSize={3}
            />
          </HStack>
        </HStack>
        <Text
          mt={2}
          bgGradient="linear(145deg,#fff685,#0049b7)"
          bgClip="text"
          fontWeight="bold"
        >
          Due on:
          {full_time}
        </Text>
      </CardHeader>
      <CardBody>
        <Box fontSize={23} fontStyle="italic">
          <TrimContent description={todo.description} />
          <Button fontStyle="italic" variant="link" onClick={onOpen}>
            ...Expand
          </Button>
        </Box>
      </CardBody>
    </Card>
  );
};

export default ToDoCard;
