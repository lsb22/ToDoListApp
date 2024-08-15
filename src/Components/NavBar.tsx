import {
  Box,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import ColorModeSwitch from "./ColorModeSwitch";

interface Props {
  handleSearch: (query: string) => void;
}

const NavBar = ({ handleSearch }: Props) => {
  const showFullNav = useBreakpointValue({ base: false, md: true });
  return (
    <Flex margin="30px" as="nav" justify="space-between" align="center">
      {showFullNav && (
        <Box>
          <Text
            fontSize={{ base: "28px", md: "3xl" }}
            fontWeight="bold"
            bgGradient="linear(to-r,orange,coral)"
            bgClip="text"
            minWidth="85px"
          >
            To Do
          </Text>
        </Box>
      )}

      <Box mx={4}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.500" />
          </InputLeftElement>
          <Input
            type="text"
            htmlSize={50}
            placeholder="Search here"
            borderRadius="8px"
            onChange={(e) => handleSearch(e.target.value)}
          />
        </InputGroup>
      </Box>
      {showFullNav ? (
        <Flex>
          <ColorModeSwitch />
          <Text>About</Text>
        </Flex>
      ) : (
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<HamburgerIcon />}
            variant="outline"
          >
            Check
          </MenuButton>
          <MenuList>
            <MenuItem>
              <ColorModeSwitch />
            </MenuItem>
            <MenuItem>
              <Text>About</Text>
            </MenuItem>
          </MenuList>
        </Menu>
      )}
    </Flex>
  );
};

export default NavBar;
