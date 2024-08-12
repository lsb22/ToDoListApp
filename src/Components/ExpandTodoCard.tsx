import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Text,
} from "@chakra-ui/react";
import { Todos } from "../hooks/useTodoos";

interface Props {
  task: Todos;
  isOpen: boolean;
  onClose: () => void;
  time: string;
}

const ExpandTodoCard = ({ task, isOpen, onClose, time }: Props) => {
  // const new_date = new Date(task.lastUpdated);
  // const month = new_date.toLocaleString("default", { month: "long" });
  // const day = new_date.getDate();
  // const year = new_date.getFullYear();
  // const hours = new_date.getHours();
  // const minutes = new_date.getMinutes();
  // const lasttime = hours >= 12 ? "PM" : "AM";
  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="right" size="lg">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader mb={10}>
          Task:
          <Text fontSize={40} fontWeight="bold" fontStyle="oblique">
            {task.name}
          </Text>
        </DrawerHeader>
        <DrawerCloseButton />
        <DrawerBody>
          Description:
          <Text fontSize={30}>{task.description}</Text>
          <Box mt={5} fontSize={20}>
            Last Updated on:
            <Text fontWeight={500}>{task.lastUpdated}</Text>
          </Box>
        </DrawerBody>
        <DrawerFooter justifyContent="space-between">
          <Text
            bgGradient="linear(to-r,red,orange)"
            bgClip="text"
            fontWeight={900}
          >
            Due on :{time}
          </Text>
          <Button variant="outline" colorScheme="red" onClick={onClose}>
            Close
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default ExpandTodoCard;
