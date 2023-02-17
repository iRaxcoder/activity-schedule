import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useScheduleStore } from "../../hooks/useScheduleStore";
import "./style.css";
export const ScheduleItem = (period) => {
  const buttonRef = useRef();
  const { startToggleSelectedDay } = useScheduleStore();

  const onSelectItem = () => {
    buttonRef.current.classList.toggle("button-selected");
    startToggleSelectedDay(period);
  };

  return (
    <>
      <td ref={buttonRef} onClick={onSelectItem} className="button"></td>
    </>
  );
};
