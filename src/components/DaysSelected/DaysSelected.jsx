import { Box, Fade, Snackbar } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useScheduleStore } from "../../hooks/useScheduleStore";

export const DaysSelected = () => {
  const { selectedDays } = useScheduleStore();
  const [state, setState] = useState({
    open: true,
    Transition: Fade,
  });

  const handleClick = (Transition) => () => {
    setState({
      open: true,
      Transition,
    });
  };

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };
  return (
    <>
      {Object.entries(selectedDays).length !== 0 && (
        <Snackbar
          sx={{ width: "70%" }}
          open={state.open}
          TransitionComponent={state.Transition}
          message={`Espacios seleccionados: ${
            Object.entries(selectedDays).length
          }`}
          key={state.Transition.name}
        />
      )}
    </>
  );
};
