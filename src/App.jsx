import { Box } from "@mui/material";
import { useRef } from "react";
import { Schedule, AddSubject, DaysSelected, CustomModal } from "./components";
import { ExportTo } from "./components/ExportTo/ExportTo";

function App() {
  const scheduleRef = useRef();
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
          <Schedule scheduleRef={scheduleRef} />
          <DaysSelected />
          <ExportTo componentRef={scheduleRef} />
          <AddSubject />
        </Box>
      </Box>
    </>
  );
}

export default App;
