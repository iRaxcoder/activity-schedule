import { exportComponentAsPNG } from "react-component-export-image";
import DownloadIcon from "@mui/icons-material/Download";
import { IconButton } from "@mui/material";
import { useScheduleStore } from "../../hooks";
export const ExportTo = ({ componentRef }) => {
  const { savedDays } = useScheduleStore();
  return (
    <>
      {Object.keys(savedDays).length !== 0 && (
        <IconButton
          onClick={() =>
            exportComponentAsPNG(componentRef, { fileName: "Horario" })
          }
          size="large"
          sx={{
            color: "#fff",
            backgroundColor: "primary.main",
            ":hover": { backgroundColor: "primary.main", opacity: 0.8 },
            position: "fixed",
            right: 0,
            bottom: 20,
          }}
        >
          <DownloadIcon sx={{ fontSize: 30 }} />
        </IconButton>
      )}
    </>
  );
};
