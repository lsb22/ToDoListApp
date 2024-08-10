import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  Checkbox,
  HStack,
  Text,
} from "@chakra-ui/react";
import { Todos } from "../hooks/useTodoos";
import { DeleteIcon, EditIcon, StarIcon } from "@chakra-ui/icons";

interface Props {
  todo: Todos;
  key: number;
  taskCompleted: (id: number) => void;
  taskDeleted: (id: number) => void;
}

const ToDoCard = ({ todo, taskCompleted, taskDeleted }: Props) => {
  const new_date = new Date(todo.date);
  const month = new_date.toLocaleString("default", { month: "long" });
  const day = new_date.getDate();
  const year = new_date.getFullYear();
  const hours = new_date.getHours();
  const minutes = new_date.getMinutes();
  const time = hours >= 12 ? "PM" : "AM";
  return (
    <Card boxShadow="2xl">
      <CardHeader>
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
            />
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
          {" " +
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
            time}
        </Text>
      </CardHeader>
      <CardBody>
        <Text fontSize={25} fontStyle="italic">
          {todo.description}
        </Text>
      </CardBody>
    </Card>
  );
};

export default ToDoCard;
