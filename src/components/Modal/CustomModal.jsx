import SaveOutlined from "@mui/icons-material/SaveOutlined";
import { Button, Divider, TextField, Typography, Box } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import Modal from "react-modal";
import { useScheduleStore, useUIStore } from "../../hooks";
import "./style.css";

Modal.setAppElement("#root");

export const CustomModal = () => {
  const { isAddSubjectModalOpen, startCloseModal } = useUIStore();
  const { startSaveSelectedDays } = useScheduleStore();

  const [formValues, setFormValues] = useState({
    name: "",
    color: "#2b9cce",
  });

  const onInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (formValues.name.trim().length !== 0) {
      startSaveSelectedDays(formValues);
      setFormValues({ ...formValues, name: "" });
      startCloseModal();
    }
  };

  return (
    <Modal
      isOpen={isAddSubjectModalOpen}
      onRequestClose={startCloseModal}
      className="modal"
      overlayClassName={"modal-fondo"}
      closeTimeoutMS={200}
      style={{ display: "flex" }}
    >
      <form onSubmit={onSubmit}>
        <Box
          sx={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <TextField
            fullWidth
            id="standard-basic"
            label="Nombre de actividad"
            variant="outlined"
            name="name"
            onChange={onInputChange}
            value={formValues.name}
          />
          <TextField
            name="color"
            label="Color"
            variant="outlined"
            style={{ width: "100%" }}
            type="color"
            value={formValues.color}
            onChange={onInputChange}
          />
          <Button type="submit">
            <SaveOutlined sx={{ fontSize: 30 }} />
          </Button>
        </Box>
      </form>
    </Modal>
  );
};
