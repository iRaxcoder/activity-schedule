import { Box, Fade, Snackbar } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";

export const DaysSelected = () => {
  const { selectedDays } = useSelector((state) => state.schedule);
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
          open={state.open}
          TransitionComponent={state.Transition}
          message={`Días seleccionados: ${Object.entries(selectedDays).length}`}
          key={state.Transition.name}
        />
      )}
    </>
  );
};
