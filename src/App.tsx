import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import ToDoLIst from "./Components/ToDoLIst";
import SidePanel from "./Components/SidePanel";

function App() {
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
          <SidePanel />
        </GridItem>
      </Show>

      <GridItem area="main">
        <ToDoLIst />
      </GridItem>
    </Grid>
  );
}

export default App;
