import { Box } from "@mui/material";
import { useRef } from "react";
import { Schedule, AddSubject, DaysSelected } from "./components";
import { ExportTo } from "./components/ExportTo/ExportTo";

function App() {
  const scheduleRef = useRef();
  return (
    <>
      <Box>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 2, backgroundColor: "#EBEBEB" }}
        >
          <AddSubject />
          <Schedule scheduleRef={scheduleRef} />
          <DaysSelected />
          <ExportTo componentRef={scheduleRef} />
        </Box>
      </Box>
    </>
  );
}

export default App;
