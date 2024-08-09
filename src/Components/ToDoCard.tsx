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
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

interface Props {
  todo: Todos;
  key: number;
  taskCompleted: (id: number) => void;
}

const ToDoCard = ({ todo, taskCompleted }: Props) => {
  const new_date = new Date(todo.date);
  const month = new_date.toLocaleString("default", { month: "long" });
  const day = new_date.getDate();
  const year = new_date.getFullYear();
  const hours = new_date.getHours();
  const minutes = new_date.getMinutes();
  const time = hours >= 12 ? "PM" : "AM";
  console.log(typeof todo.isCompleted);
  return (
    <Card boxShadow="2xl">
      <CardHeader>
        <HStack justifyContent="space-between">
          <HStack>
            <Checkbox size="lg" onChange={() => taskCompleted(todo.id)} />
            <Badge ml={3} fontSize="lg" fontWeight="bold" colorScheme="pink">
              {todo.name}
            </Badge>
          </HStack>
          <HStack>
            <EditIcon color="violet" mr={3} />
            <DeleteIcon color="red" />
          </HStack>
        </HStack>
        <Text mt={2} color="skyblue">
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
        <Text fontSize={25}>{todo.description}</Text>
      </CardBody>
    </Card>
  );
};

export default ToDoCard;
