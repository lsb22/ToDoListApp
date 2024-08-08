import { Grid, GridItem, Show, Text } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import ToDoLIst from "./Components/ToDoLIst";
import SidePanel from "./Components/SidePanel";
import useTodoos, { Todos } from "./hooks/useTodoos";
import apiClient from "./Services/api-client";

function App() {
  const { toDoos, setToDoos, error, setError } = useTodoos();

  const addNewTask = (newTodo: Todos) => {
    const original = [...toDoos];
    // setToDoos([...toDoos, newTodo]); not doing this because it's leading to race condition
    apiClient
      .post("/addTodo", newTodo)
      .then((res) => setToDoos(res.data)) // to avoid race condition
      .catch((err) => {
        setError(err.message);
        setToDoos(original);
      });
  };

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "350px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <Show above="lg">
        <GridItem mr={10} ml={7} area="aside">
          <SidePanel sendTodo={(data: Todos) => addNewTask(data)} />
        </GridItem>
      </Show>

      <GridItem area="main" padding={5}>
        {error && <Text color="red">{error}</Text>}
        <ToDoLIst toDoos={toDoos} />
      </GridItem>
    </Grid>
  );
}

export default App;
