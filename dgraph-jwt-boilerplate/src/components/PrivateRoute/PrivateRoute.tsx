import * as React from 'react';
import { Redirect, Route, RouteProps } from 'react-router';
import NavBar from "../NavBar/NavBar";

export interface PrivateRouteProps extends RouteProps {
  isAuthenticated: boolean;
  renderComponent: React.ComponentType<any> | React.ComponentType<any>;
//   isAllowed: boolean;
//   restrictedPath: string;
//   authenticationPath: string;
}


export const PrivateRoute: React.FC<PrivateRouteProps> = props => {
  let redirectPath = '/';
//   if (!props.isAuthenticated) {
//     redirectPath = props.authenticationPath;
//   }
//   if (props.isAuthenticated && !props.isAllowed) {
//     redirectPath = props.restrictedPath;
//   }

  if (!props.isAuthenticated) {
    const renderComponent = () => <Redirect to={{ pathname: redirectPath }} />;
    return <Route {...props} component={renderComponent} render={undefined} />;
  } else {
    const renderComponent = () => {
        return(
            <NavBar>
                {<props.renderComponent/>}
            </NavBar>
        )
    };
    return <Route component={renderComponent} {...props} />;
  }
};

export default PrivateRoute;