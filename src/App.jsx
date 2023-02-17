import { Box } from "@mui/material";
import { Schedule } from "./components";

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
        </Box>
      </Box>
    </>
  );
}

export default App;
