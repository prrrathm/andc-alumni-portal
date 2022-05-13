export const basicInfo = (
  state = {},
  actions
) => {
  switch (actions.type) {
    case "CHANGE_BASIC_INFO":
      return {
        ...state,
        state: actions.payload,
      };
    default:
      return state;
  }
};
