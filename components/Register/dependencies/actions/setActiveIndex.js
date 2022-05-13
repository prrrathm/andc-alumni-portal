import { useDispatch } from "react-redux";

export const setActiveIndex = (value) => {
  // const dispatch = useDispatch();
  return ({
      type: "CHANGE_ACTIVE_INDEX",
      payload: value,
    })
};
