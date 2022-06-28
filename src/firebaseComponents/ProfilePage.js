import React, { useContext } from "react";
import { UserContext } from "../firebaseComponents/UserProviders";
import {auth} from "../firebase";
import './profilePage.scss'
import { ModalDialog } from "../ModalDialog/modal";
const ProfilePage = () => {
  const user = useContext(UserContext);
  const {photoURL, displayName, email} = user;
  localStorage.clear();
  localStorage.setItem("usersignin",displayName);
  localStorage.setItem("usersigninmail",email);
  localStorage.setItem("usersigninphoto",photoURL);

  return (
    <div className = "userLoggedProfilePage">
      <div>
       <div>
       <ModalDialog
                modalAnimationID="noanimation"
                modalAnimation={false}
                modalUser={displayName }
                modalBody="Thank you for getting sign in"
                modalTitle="Sucessfull Message"
                modalFCheckTitle="Visit"
                modalClickText="Thanks"
              />
       </div>
        <div 
          style={{
            background: `url(${photoURL || 'https://res.cloudinary.com/dqcsk8rsc/image/upload/v1577268053/avatar-1-bitmoji_upgwhc.png'})  no-repeat center center`,
            backgroundSize: "cover" 
          }}
          className="LoggedUserImage border border-blue-300"
        ></div>
        <div className = "">
        <h2 className = "text-2xl font-semibold">{displayName}</h2>
        <h3 className = "italic">{email}</h3>
        </div>
      </div>
      <button className = "p-1 bg-red-600 mb-4 mt-4 text-white" onClick = {() => {auth.signOut()}}>Sign out</button>
    </div>
  ) 
};
export default ProfilePage;