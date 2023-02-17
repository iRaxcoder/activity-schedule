import { Box } from "@mui/material";
import { Schedule, AddSubject, DaysSelected, CustomModal } from "./components";

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
