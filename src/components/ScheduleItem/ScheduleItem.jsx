import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useScheduleStore } from "../../hooks/useScheduleStore";
import "./style.css";
export const ScheduleItem = (period) => {
  const buttonRef = useRef();

  const {
    startToggleSelectedDay,
    savedDays,
    startIsDaySaved,
    startRemoveSavedDay,
  } = useScheduleStore();

  const onSelectItem = () => {
    buttonRef.current.classList.toggle("button-selected");
    startToggleSelectedDay(period);
  };

  const onDelete = () => {
    buttonRef.current = null;
    startRemoveSavedDay(period.id);
  };

  return (
    <>
      {startIsDaySaved(period.id) ? (
        <td
          key={period.id}
          onClick={onDelete}
          style={{ backgroundColor: savedDays[period.id].color }}
          id={period.id}
        >
          {savedDays[period.id].name}
        </td>
      ) : (
        <td
          key={period.id}
          ref={buttonRef}
          onClick={onSelectItem}
          className="button"
        ></td>
      )}
    </>
  );
};
