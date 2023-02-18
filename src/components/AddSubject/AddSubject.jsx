import AddOutlined from "@mui/icons-material/AddOutlined";
import { IconButton } from "@mui/material";
import { useUIStore, useScheduleStore } from "../../hooks";

export const AddSubject = () => {
  const { selectedDays } = useScheduleStore();
  const { startOpenModal } = useUIStore();
  return (
    <>
      {Object.keys(selectedDays).length !== 0 && (
        <IconButton
          onClick={startOpenModal}
          size="large"
          sx={{
            color: "#fff",
            backgroundColor: "primary.main",
            ":hover": { backgroundColor: "primary.main", opacity: 0.8 },
            position: "fixed",
            right: 10,
            zIndex: 9999,
            bottom: 20,
          }}
        >
          <AddOutlined sx={{ fontSize: 30 }} />
        </IconButton>
      )}
    </>
  );
};
