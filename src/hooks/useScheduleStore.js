import { useDispatch, useSelector } from "react-redux";
import {
  onRemoveSavedDay,
  onSaveSelectedDays,
  onToggleSelectedDay,
} from "../store/schedule/scheduleSlice";

export const useScheduleStore = () => {
  const dispatch = useDispatch();
  const { selectedDays, savedDays } = useSelector((state) => state.schedule);

  const startToggleSelectedDay = (day) => {
    dispatch(onToggleSelectedDay(day));
  };

  const startSaveSelectedDays = (activityInfo) => {
    dispatch(onSaveSelectedDays(activityInfo));
  };

  const startRemoveSavedDay = (id) => {
    dispatch(onRemoveSavedDay(id));
  };

  const startIsDaySaved = (id) => {
    if (savedDays[id]) {
      return true;
    }
    return false;
  };

  return {
    //props
    selectedDays,
    savedDays,
    //methods
    startToggleSelectedDay,
    startSaveSelectedDays,
    startIsDaySaved,
    startRemoveSavedDay,
  };
};
