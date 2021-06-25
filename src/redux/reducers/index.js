import { combineReducers } from 'redux';
import { reqresResourcesReducer } from './reqres-resources-reducers';
import { reqresUsersReducer } from './reqres-users-reducers';
import { roboReducer } from './robo-reducers';

import { userReducer } from './userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  robots: roboReducer,
  reqresUsers: reqresUsersReducer,
  reqresResources: reqresResourcesReducer,
});

export default rootReducer;
