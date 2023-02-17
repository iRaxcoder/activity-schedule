import { Box } from "@mui/material";
import { Schedule } from "./components";
import { AddSubject } from "./components/AddSubject/AddSubject";
import { DaysSelected } from "./components/DaysSelected/DaysSelected";

function App() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 2, backgroundColor: "#EBEBEB" }}
        >
          <Schedule />
          <DaysSelected />
          <AddSubject />
        </Box>
      </Box>
    </>
  );
}

export default App;
