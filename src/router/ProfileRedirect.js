//HOC

import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSession } from "../firebase/UsersProvider";

function ProfileRedirect({ component: Component, ...rest }) {
  const { user , isAdmin} = useSession();

  return (
    <Route
      {...rest}
      render={(props) =>
        !user ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: isAdmin? '/users':`/profile/${user.uid}`,
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}

export default ProfileRedirect;
