import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
} from "@chakra-ui/react";

interface Props {
  onClose: () => void;
  isOpen: boolean;
}

const AddNewTaskModal = ({ onClose, isOpen }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>New Task</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form>
            <FormControl mb={3}>
              <FormLabel>Task Name</FormLabel>
              <Input type="text" placeholder="Task Name..." />
            </FormControl>
            <FormControl mb={3}>
              <FormLabel>Enter Description</FormLabel>
              <Textarea placeholder="description" resize="vertical" />
            </FormControl>
            <FormControl mb={3}>
              <FormLabel>Due date</FormLabel>
              <Input type="datetime-local" placeholder="Task Name..." />
            </FormControl>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="red" variant="ghost" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddNewTaskModal;
