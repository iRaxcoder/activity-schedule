import { useDispatch, useSelector } from "react-redux";
import {
  onOpenAddSubjectModal,
  onCloseAddSubjectModal,
} from "../store/ui/uiSlice";

export const useUIStore = () => {
  const dispatch = useDispatch();
  const { isAddSubjectModalOpen } = useSelector((state) => state.ui);
  const startOpenModal = () => {
    dispatch(onOpenAddSubjectModal());
  };
  const startCloseModal = () => {
    dispatch(onCloseAddSubjectModal());
  };
  return {
    //props
    isAddSubjectModalOpen,
    //methods
    startOpenModal,
    startCloseModal,
  };
};
