import { getReqresUsers, getReqresResources } from '../../services/reqres';
import {
  GET_REQRES_USERS_ATTEMPT,
  GET_REQRES_USERS_FAILURE,
  GET_REQRES_USERS_SUCCESS,
  GET_REQRES_RESOURCE_ATTEMPT,
  GET_REQRES_RESOURCE_FAILURE,
  GET_REQRES_RESOURCE_SUCCESS,
} from '../action-types';

// users
export const getReqresUsersAttemptAction = () => ({
  type: GET_REQRES_USERS_ATTEMPT,
});

export const getReqresUsersSuccessAction = (payload) => ({
  type: GET_REQRES_USERS_SUCCESS,
  payload,
});

export const getReqresUsersFailureAction = (payload) => ({
  type: GET_REQRES_USERS_FAILURE,
  payload,
});

export const getReqresUsersActionAsync = (amount = 20) => {
  return async (dispatch) => {
    try {
      dispatch(getReqresUsersAttemptAction());
      const data = await getReqresUsers();
      dispatch(getReqresUsersSuccessAction(data));
    } catch (error) {
      dispatch(getReqresUsersFailureAction(error));
    }
  };
};

// resource
export const getReqresResourceAttemptAction = () => ({
  type: GET_REQRES_RESOURCE_ATTEMPT,
});

export const getReqresResourceSuccessAction = (payload) => ({
  type: GET_REQRES_RESOURCE_SUCCESS,
  payload,
});

export const getReqresResourceFailureAction = (payload) => ({
  type: GET_REQRES_RESOURCE_FAILURE,
  payload,
});

export const getReqresResourceActionAsync = (amount = 20) => {
  return async (dispatch) => {
    try {
      dispatch(getReqresResourceAttemptAction());
      const data = await getReqresResources();
      console.log('data', data);
      // const data = await getFakerRobots(amount);
      dispatch(getReqresResourceSuccessAction(data));
    } catch (error) {
      dispatch(getReqresResourceFailureAction(error));
    }
  };
};
