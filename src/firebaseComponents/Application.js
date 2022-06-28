import React, { useContext } from "react";
import SignIn from "./SignIn";
import { UserContext } from "../firebaseComponents/UserProviders";
import ProfilePage from "./ProfilePage";
import {HeaderNav}  from "../Header/app";

const Application = () => {
  const user = useContext(UserContext);

  return (
    <div>
      {user ? (
        <div>
          <HeaderNav />
          <ProfilePage />
        </div>
      ) : (
        <div>
          <SignIn />
        </div>
      )}
    </div>
  );
};
export default Application;
