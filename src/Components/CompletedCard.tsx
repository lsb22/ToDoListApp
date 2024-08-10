import { Badge, Card, CardBody, CardHeader, Text } from "@chakra-ui/react";
import { Todos } from "../hooks/useTodoos";

interface Props {
  task: Todos;
}

const CompletedCard = ({ task }: Props) => {
  const new_date = new Date(task.date);
  const month = new_date.toLocaleString("default", { month: "long" });
  const day = new_date.getDate();
  const year = new_date.getFullYear();
  const hours = new_date.getHours();
  const minutes = new_date.getMinutes();
  const time = hours >= 12 ? "PM" : "AM";

  return (
    <Card borderTop="1px solid green" boxShadow="lg">
      <CardHeader>
        <Badge colorScheme="red" fontSize="lg">
          {task.name}
        </Badge>
        <Text
          mt={3}
          bgGradient="linear(83deg,#C850C0 46%,#FFCC70 100%)"
          bgClip="text"
        >
          Was due on:{" "}
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
        <Text fontSize="xl" fontWeight="bold">
          {task.description}
        </Text>
      </CardBody>
    </Card>
  );
};

export default CompletedCard;
