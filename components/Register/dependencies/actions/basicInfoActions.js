export const useBasicInfo = (value) => {
  return {
    type: "CHANGE_BASIC_INFO",
    payload: value,
  };
};