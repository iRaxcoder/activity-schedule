import { useDispatch, useSelector } from "react-redux";
import { onToggleSelectedDay } from "../store/schedule/scheduleSlice";

export const useScheduleStore = () => {
  const dispatch = useDispatch();
  const { selectedDays } = useSelector((state) => state.schedule);

  const startToggleSelectedDay = (day) => {
    dispatch(onToggleSelectedDay(day));
  };

  return {
    //props
    selectedDays,
    //methods
    startToggleSelectedDay,
  };
};
