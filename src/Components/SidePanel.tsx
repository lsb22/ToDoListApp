import {
  AddIcon,
  ArrowRightIcon,
  CalendarIcon,
  CheckCircleIcon,
  DeleteIcon,
  StarIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  HStack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import AddNewTaskModal from "./AddNewTaskModal";
import { Todos } from "../hooks/useTodoos";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface Props {
  sendTodo: (todo: Todos) => void;
}

const SidePanel = ({ sendTodo }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedComponent, setSelectedComponent] = useState("All Tasks");
  const navigate = useNavigate();
  return (
    <Card boxShadow="2xl">
      <CardHeader>
        <Button width="100%" colorScheme="green" onClick={onOpen}>
          <AddIcon mr={2} /> New Task
        </Button>
        <AddNewTaskModal
          onClose={onClose}
          isOpen={isOpen}
          sendTodo={sendTodo}
        />
      </CardHeader>
      <CardBody>
        <Box>
          <Button
            variant="link"
            fontSize="xl"
            mb={5}
            display="block"
            onClick={() => {
              setSelectedComponent("All Tasks");
              navigate("/");
            }}
            color={selectedComponent === "All Tasks" ? "coral" : "white"}
          >
            <HStack>
              <CalendarIcon boxSize={4} mr={4} />
              <Text>All Tasks</Text>
            </HStack>
          </Button>
          <Button
            variant="link"
            fontSize="xl"
            mb={5}
            display="block"
            onClick={() => {
              setSelectedComponent("Important");
              navigate("/important");
            }}
            color={selectedComponent === "Important" ? "coral" : "white"}
          >
            <HStack>
              <StarIcon boxSize={4} mr={4} />
              <Text>Important</Text>
            </HStack>
          </Button>
          <Button
            variant="link"
            fontSize="xl"
            mb={5}
            display="block"
            onClick={() => {
              setSelectedComponent("Completed");
              navigate("/completed");
            }}
            color={selectedComponent === "Completed" ? "coral" : "white"}
          >
            <HStack>
              <CheckCircleIcon boxSize={4} mr={4} />
              <Text>Completed</Text>
            </HStack>
          </Button>
          <Button
            variant="link"
            fontSize="xl"
            mb={5}
            display="block"
            onClick={() => {
              setSelectedComponent("Removed");
              navigate("/removed");
            }}
            color={selectedComponent === "Removed" ? "coral" : "white"}
          >
            <HStack>
              <DeleteIcon boxSize={4} mr={4} />
              <Text>Removed</Text>
            </HStack>
          </Button>
          <Button
            variant="link"
            fontSize="xl"
            mb={5}
            display="block"
            onClick={() => {
              setSelectedComponent("Due Soon");
              navigate("/dueSoon");
            }}
            color={selectedComponent === "Due Soon" ? "coral" : "white"}
          >
            <HStack>
              <ArrowRightIcon boxSize={4} mr={4} />
              <Text>Due Soon</Text>
            </HStack>
          </Button>
        </Box>
      </CardBody>
    </Card>
  );
};

export default SidePanel;
