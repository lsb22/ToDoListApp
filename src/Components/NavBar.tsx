import {
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" alignContent="center" margin="30px">
      <Text
        fontSize="3xl"
        fontWeight="bold"
        bgGradient="linear(to-r,orange,coral)"
        bgClip="text"
      >
        To Do
      </Text>
      <HStack>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.500" />
          </InputLeftElement>
          <Input
            type="text"
            htmlSize={60}
            placeholder="Search here"
            borderRadius="8px"
          />
        </InputGroup>
      </HStack>
      <HStack mr={5}>
        <ColorModeSwitch />
        <Text>About</Text>
      </HStack>
    </HStack>
  );
};

export default NavBar;
