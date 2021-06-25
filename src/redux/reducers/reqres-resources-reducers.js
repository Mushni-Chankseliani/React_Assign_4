import * as actionType from '../action-types';

const initialState = {
  error: null,
  loading: false,
  data: [],
};

export const reqresResourcesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_REQRES_RESOURCE_ATTEMPT:
      return {
        ...state,
        loading: true,
      };
    case actionType.GET_REQRES_RESOURCE_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    case actionType.GET_REQRES_RESOURCE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    default:
      return state;
  }
};

export default reqresResourcesReducer;
