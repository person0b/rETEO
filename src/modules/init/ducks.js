export const REQUESTED_INIT = `@reteo/init/REQUESTED_INIT`;
export const REQUESTED_INIT_SUCCEEDED = `@reteo/init/REQUESTED_INIT_SUCCEEDED`;
export const REQUESTED_INIT_ERROR = `@reteo/init/REQUESTED_INIT_ERROR`;
export const FETCHED_INIT = `@reteo/init/FETCHED_INIT`;

export const requestInit = () => {
  return { type: REQUESTED_INIT };
};

export const requestInitSuccess = () => {
  return { type: REQUESTED_INIT_SUCCEEDED };
};

export const requestInitError = () => {
  return { type: REQUESTED_INIT_ERROR };
};

export const fetchInit = () => {
  return { type: FETCHED_INIT };
};

const initialState = {
  init: false,
  initStatus: `none`
};

const initReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUESTED_INIT:
      return {
        ...state,
        initStatus: `request`
      };
    case REQUESTED_INIT_SUCCEEDED:
      return {
        init: true,
        initStatus: `success`
      };
    case REQUESTED_INIT_ERROR:
      return {
        ...state,
        initStatus: `error`
      };
    default:
      return state;
  }
};

export default initReducer;
