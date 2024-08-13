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
  Text,
  Checkbox,
  HStack,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { Todos } from "../hooks/useTodoos";

const schema = z.object({
  name: z
    .string({ message: "Task name is required." })
    .min(3, { message: "Length should be atleast 3" })
    .max(18, { message: "Length should be less than equal 18" }),
  description: z
    .string({ message: "Description is required." })
    .min(5, { message: "Length should be atleast 5" })
    .max(999, { message: "Length should be less than equal 999" }),
  date: z.string().min(16, { message: "date is required." }),
  important: z.boolean(),
});

type FormData = z.infer<typeof schema>;

interface Props {
  onClose: () => void;
  isOpen: boolean;
  updateEditedTask: (todo: Todos) => void;
  task: Todos;
  handleEdit: () => void;
}

const EditCard = ({
  onClose,
  isOpen,
  updateEditedTask,
  task,
  handleEdit,
}: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const d = new Date();
  const month = d.toLocaleString("default", { month: "long" });
  const day = d.getDate();
  const year = d.getFullYear();
  const hours = d.getHours();
  const minutes = d.getMinutes();
  const time = hours >= 12 ? "PM" : "AM";
  const current_date =
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
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>New Task</ModalHeader>
        <ModalCloseButton
          onClick={() => {
            reset();
            handleEdit();
          }}
        />
        <ModalBody>
          <form
            onSubmit={handleSubmit((data) => {
              updateEditedTask({
                ...data,
                isCompleted: task.isCompleted,
                id: task.id,
                isDeleted: task.isDeleted,
                lastUpdated: current_date,
              });
              reset();
              onClose();
            })}
          >
            <FormControl mb={3}>
              <FormLabel>Task Name</FormLabel>
              <Input
                type="text"
                defaultValue={task.name}
                {...register("name")}
              />
              {errors.name && <Text color="red">{errors.name.message}</Text>}
            </FormControl>
            <FormControl mb={3}>
              <FormLabel>Enter Description</FormLabel>
              <Textarea
                defaultValue={task.description}
                resize="vertical"
                {...register("description")}
              />
              {errors.description && (
                <Text color="red">{errors.description.message}</Text>
              )}
            </FormControl>
            <FormControl mb={3}>
              <FormLabel>Due date</FormLabel>
              <Input
                type="datetime-local"
                defaultValue={task.date}
                {...register("date")}
              />
              {errors.date && <Text color="red">{errors.date.message}</Text>}
            </FormControl>
            <FormControl mt={4} mb={3}>
              <HStack alignContent="center">
                <Checkbox
                  defaultChecked={task.important}
                  {...register("important")}
                />
                <Text fontSize="md" fontWeight="bold">
                  Important
                </Text>
              </HStack>
            </FormControl>
            <Button type="submit" colorScheme="green">
              Update
            </Button>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="red"
            variant="ghost"
            onClick={() => {
              onClose();
              handleEdit();
              reset();
            }}
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditCard;
