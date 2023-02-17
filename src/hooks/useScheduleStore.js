import { useDispatch } from "react-redux";
import { onToggleSelectedDay } from "../store/schedule/scheduleSlice";

export const useScheduleStore = () => {
  const dispatch = useDispatch();

  const startToggleSelectedDay = (day) => {
    dispatch(onToggleSelectedDay(day));
  };

  return {
    //methods
    startToggleSelectedDay,
  };
};
