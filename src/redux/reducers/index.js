import { combineReducers } from 'redux';
import { roboReducer } from './robo-reducers';

import { userReducer } from './userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  robots: roboReducer,
});

export default rootReducer;
