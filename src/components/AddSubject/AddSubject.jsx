import AddOutlined from "@mui/icons-material/AddOutlined";
import { IconButton } from "@mui/material";
import { useSelector } from "react-redux";

export const AddSubject = () => {
  const { selectedDays } = useSelector((state) => state.schedule);
  return (
    <>
      {Object.keys(selectedDays).length !== 0 && (
        <IconButton
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
          <AddOutlined sx={{ fontSize: 30 }} />
        </IconButton>
      )}
    </>
  );
};
