import { Grid, GridItem, Show, Text } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import ToDoLIst from "./Components/ToDoLIst";
import SidePanel from "./Components/SidePanel";
import useTodoos, { Todos } from "./hooks/useTodoos";
import apiClient from "./Services/api-client";
import { Route, Routes } from "react-router-dom";
import CompletedTasks from "./Components/CompletedTasks";
import DeletedTasks from "./Components/DeletedTasks";
import ImportantTasks from "./Components/ImportantTasks";
import { useState } from "react";

function App() {
  const { toDoos, setToDoos, error, setError } = useTodoos();
  const [searchQuery, setSearchQuery] = useState("");

  const addNewTask = (newTodo: Todos) => {
    const original = [...toDoos];
    // setToDoos([...toDoos, newTodo]); not doing this because it's leading to race condition
    apiClient
      .post("/addTodo", { ...newTodo, id: toDoos.length + 1 })
      .then((res) => setToDoos(res.data)) // to avoid race condition
      .catch((err) => {
        setError(err.message);
        setToDoos(original);
      });
  };

  const updateCompletion = (id: number) => {
    console.log(id);
    apiClient
      .delete("/complete/" + id)
      .then((res) => setToDoos(res.data))
      .catch((err) => {
        setError(err);
        console.log(error);
      });
  };

  const deleteTask = (id: number) => {
    apiClient
      .delete("/delete/" + id)
      .then((res) => setToDoos(res.data))
      .catch((err) => setError(err));
  };

  const handleSearch = (query: string) => {
    console.log(query);
    const params = new URLSearchParams(window.location.search);
    params.set("search", query);
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${params}`
    );
    setSearchQuery(query);
  };

  const filteredTasks = toDoos.filter((task) =>
    task.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        md: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        md: "315 1fr",
        lg: "350px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar handleSearch={handleSearch} />
      </GridItem>

      <Show above="md">
        <GridItem mr={10} ml={7} area="aside">
          <SidePanel sendTodo={(data: Todos) => addNewTask(data)} />
        </GridItem>
      </Show>

      <GridItem area="main" padding={5}>
        {error && <Text color="red">{error}</Text>}
        <Routes>
          <Route
            path="/"
            element={
              <ToDoLIst
                toDoos={filteredTasks.filter(
                  (task) => !task.isCompleted && !task.isDeleted
                )}
                taskCompleted={(id: number) => updateCompletion(id)}
                taskDeleted={(id: number) => deleteTask(id)}
              />
            }
          />
          <Route
            path="/completed"
            element={
              <CompletedTasks
                tasks={filteredTasks.filter(
                  (task) => task.isCompleted && !task.isDeleted
                )}
              />
            }
          />
          <Route
            path="/removed"
            element={
              <DeletedTasks
                tasks={filteredTasks.filter(
                  (task) => !task.isCompleted && task.isDeleted
                )}
              />
            }
          />
          <Route
            path="/important"
            element={
              <ImportantTasks
                tasks={filteredTasks.filter((task) => task.important)}
              />
            }
          />
        </Routes>
      </GridItem>
    </Grid>
  );
}

export default App;
