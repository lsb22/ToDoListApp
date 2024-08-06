import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack mr={5}>
      <Switch
        onChange={toggleColorMode}
        isChecked={colorMode === "dark"}
        colorScheme="green"
      />
      <Text>Dark</Text>
    </HStack>
  );
};
export default ColorModeSwitch;
