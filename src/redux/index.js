const createStore = (reducer) => {
  let state = null;
  const listeners = [];
  const subscribe = (listener) => listeners.push(listener);
  const getState = () => state;
  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };
  dispatch({}); // 初始化 state
  return { getState, dispatch, subscribe };
};

const themeReducer = (state, action) => {
  if (!state) {
    return {
      theme: "red",
    };
  }

  switch (action.type) {
    case "CHANGE_COLOR":
      return {
        ...state,
        theme: action.value,
      };
    default:
      return state;
  }
};

export default createStore(themeReducer)