import { API_SERVICE } from '../../services/api';
// import { getFakerRobots } from '../../services/faker';
import {
  GET_ROBO_ATTEMPT,
  GET_ROBO_FAILURE,
  GET_ROBO_SUCCESS,
} from '../action-types';

export const getRoboRequestAction = () => ({
  type: GET_ROBO_ATTEMPT,
});

export const getRoboSuccessAction = (payload) => ({
  type: GET_ROBO_SUCCESS,
  payload,
});

export const getRoboFailureAction = (payload) => ({
  type: GET_ROBO_FAILURE,
  payload,
});

export const getRoboActionAsync = (amount = 10) => {
  return async (dispatch) => {
    try {
      dispatch(getRoboRequestAction());
      const data = await API_SERVICE.getRoboUsersAsync();
      console.log('data', data);
      // const data = await getFakerRobots(amount);
      dispatch(getRoboSuccessAction(data));
    } catch (error) {
      dispatch(getRoboFailureAction(error));
    }
  };
};
