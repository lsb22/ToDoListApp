import {
  Badge,
  Button,
  Card,
  CardBody,
  CardHeader,
  HStack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Todos } from "../hooks/useTodoos";
import { CheckCircleIcon, CloseIcon, StarIcon } from "@chakra-ui/icons";
import ExpandTodoCard from "./ExpandTodoCard";
import TrimContent from "./TrimContent";

interface Props {
  task: Todos;
  key: number;
}

const ImportantCard = ({ task }: Props) => {
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
    <Card borderTop="1px solid gold" boxShadow="lg">
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
        <StarIcon ml={3} boxSize={5} color="gold" />
        <Text
          mt={3}
          mb={3}
          bgGradient="linear(83deg,#C850C0 46%,#FFCC70 100%)"
          bgClip="text"
          fontWeight={700}
        >
          Due on: {full_time}
        </Text>
        {task.isCompleted ? (
          <HStack>
            <CheckCircleIcon color="green.500" />
            <Text bgGradient="linear(to-r,green.600,green.500)" bgClip="text">
              Completed
            </Text>
          </HStack>
        ) : (
          <HStack>
            <CloseIcon ml={2} boxSize={3} color="red" />
            <Text color="red.300">Not Completed</Text>
          </HStack>
        )}
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

export default ImportantCard;
