import SaveOutlined from "@mui/icons-material/SaveOutlined";
import { Button, Divider, TextField, Typography, Box } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import Modal from "react-modal";
import { useUIStore } from "../../hooks";
import "./style.css";

Modal.setAppElement("#root");

export const CustomModal = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { isAddSubjectModalOpen, startCloseModal } = useUIStore();

  const [formValues, setFormValues] = useState({
    title: "",
  });

  const titleValidClass = useMemo(() => {
    if (!formSubmitted) return "";

    return formValues.title.length > 0 ? "is-valid" : "is-invalid";
  }, [formValues.title, formSubmitted]);

  const onInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
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
            gap: 1,
          }}
        >
          <TextField
            fullWidth
            id="standard-basic"
            label="Nombre de actividad"
            variant="standard"
          />
          <input style={{ width: "100%" }} type="color" />
          <Button type="submit">
            <SaveOutlined sx={{ fontSize: 30 }} />
          </Button>
        </Box>
      </form>
    </Modal>
  );
};
