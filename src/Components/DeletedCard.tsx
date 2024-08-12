import {
  Badge,
  Button,
  Card,
  CardBody,
  CardHeader,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Todos } from "../hooks/useTodoos";
import TrimContent from "./TrimContent";
import ExpandTodoCard from "./ExpandTodoCard";

interface Props {
  task: Todos;
  key: number;
}

const DeletedCard = ({ task }: Props) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const new_date = new Date(task.date);
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

  return (
    <Card borderTop="1px solid red" boxShadow="lg">
      <CardHeader>
        <ExpandTodoCard
          task={task}
          isOpen={isOpen}
          onClose={onClose}
          time={full_time}
        />
        <Badge colorScheme="red" fontSize="lg">
          {task.name}
        </Badge>
        <Text
          mt={3}
          bgGradient="linear(83deg,#C850C0 46%,#FFCC70 100%)"
          bgClip="text"
          fontWeight={550}
        >
          Was due on: {full_time}
        </Text>
      </CardHeader>
      <CardBody>
        <Text fontSize="xl" fontWeight="bold">
          <TrimContent description={task.description} />
          <Button fontStyle="italic" variant="link" onClick={onOpen}>
            ...Expand
          </Button>
        </Text>
      </CardBody>
    </Card>
  );
};

export default DeletedCard;
