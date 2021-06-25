import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router';

import HomePage from './pages/home-page';
import { Loader } from './components/loader';

import * as routes from './utils/routePaths';

const Profile = React.lazy(() => import('./pages/profile'));
const AuthPage = React.lazy(() => import('./pages/auth'));
const CustomRobots = React.lazy(() => import('./pages/custom-robots-page'));
const FakerRobots = React.lazy(() => import('./pages/faker-robots'));
const ReqresUsers = React.lazy(() => import('./pages/reqres-users'));
const ReqresResources = React.lazy(() => import('./pages/reqres-resources'));

function Routes() {
  return (
    <Suspense fallback={<Loader message="Page is loading..." />}>
      <Switch>
        <Route path={routes.PROFILE_PATH}>
          <Profile title="Secured Profile Page" />
        </Route>
        <Route path={routes.AUTH_PATH}>
          <AuthPage />
        </Route>
        <Route path={routes.CUSTOM_ROBOTS}>
          <CustomRobots />
        </Route>
        <Route path={routes.FAKER_ROBOTS}>
          <FakerRobots />
        </Route>
        <Route path={routes.REQRES_USERS}>
          <ReqresUsers />
        </Route>
        <Route path={routes.REQRES_RESOURCES}>
          <ReqresResources />
        </Route>
        <Route path={routes.HOME_PATH}>
          <HomePage />
        </Route>
      </Switch>
    </Suspense>
  );
}

export default Routes;
