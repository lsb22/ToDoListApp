import {
  AddIcon,
  ArrowRightIcon,
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
} from "@chakra-ui/react";

const SidePanel = () => {
  return (
    <Card>
      <CardHeader>
        <Button width="100%" colorScheme="green">
          <AddIcon mr={2} /> New Task
        </Button>
      </CardHeader>
      <CardBody>
        <Box>
          <Button variant="link" fontSize="xl" mb={5} display="block">
            <HStack>
              <StarIcon boxSize={4} mr={4} />
              <Text>Important</Text>
            </HStack>
          </Button>
          <Button variant="link" fontSize="xl" mb={5} display="block">
            <HStack>
              <CheckCircleIcon boxSize={4} mr={4} />
              <Text>Completed</Text>
            </HStack>
          </Button>
          <Button variant="link" fontSize="xl" mb={5} display="block">
            <HStack>
              <DeleteIcon boxSize={4} mr={4} />
              <Text>Removed</Text>
            </HStack>
          </Button>
          <Button variant="link" fontSize="xl" mb={5} display="block">
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
