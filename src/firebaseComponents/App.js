import React from "react";
import Application from "../firebaseComponents/Application";
import UserProvider from "../firebaseComponents/UserProviders";
function FirebaseApp() {
  return (
    <UserProvider>
      <Application />
    </UserProvider>
  );
}
export default FirebaseApp;