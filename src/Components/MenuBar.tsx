import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MenuBar = () => {
  const navigate = useNavigate();
  const [selectedTaskType, setSelectedTaskType] = useState("Tasks");
  return (
    <Box mb={5}>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          {selectedTaskType}
        </MenuButton>
        <MenuList>
          <MenuItem
            onClick={() => {
              setSelectedTaskType("Tasks");
              navigate("/");
            }}
          >
            Tasks
          </MenuItem>
          <MenuItem
            onClick={() => {
              setSelectedTaskType("Due Soon");
              navigate("/dueSoon");
            }}
          >
            Due Soon
          </MenuItem>
          <MenuItem
            onClick={() => {
              setSelectedTaskType("Important");
              navigate("/important");
            }}
          >
            Important
          </MenuItem>
          <MenuItem
            onClick={() => {
              setSelectedTaskType("Completed");
              navigate("/completed");
            }}
          >
            Completed
          </MenuItem>
          <MenuItem
            onClick={() => {
              setSelectedTaskType("Removed");
              navigate("/removed");
            }}
          >
            Removed
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default MenuBar;
