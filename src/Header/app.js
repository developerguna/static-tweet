import React from "react";
import "./header.css";
import ReactHeader from "../ReactHeader/reactheader";
import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { getisHamburgerActive } from "../redux/global/global.actions";
import Primitives from "../Primitives";
const LoggedUserStyle = styled.div`
  img {
      width: 100px;
      height: auto;
      border-radius: 50px;
  }`
const LoggedUserwithImage = () => {
  let usersign_in = localStorage.getItem("usersignin");
  let UserPhoto = localStorage.getItem("usersigninphoto");
  if (UserPhoto === "null") {
    UserPhoto =
      "https://res.cloudinary.com/dqcsk8rsc/image/upload/v1577268053/avatar-1-bitmoji_upgwhc.png";
  }
  return (
    <div className="UserLoggeddiv">
      <LoggedUserStyle><img src={UserPhoto} alt="UserPhoto" /></LoggedUserStyle>
      <p className="loggedusermain">
        <span className="LoggedUser">{usersign_in} </span>
      </p>
    </div>
  );
};

const HeaderNav = ({ children }) => {
  const REACT_VERSION = React.version;
  const [active, setActive] = useState(false);
  const ToggleMenu = () => {
    return setActive((previousActive) => !previousActive);
  };
  const isMobile = useSelector((s) => s.global?.ismobile)
  const dispatch = useDispatch();
  const setHamburgerActive = () => {
    dispatch(getisHamburgerActive())
    setActive(false)
  }
  const isHamburgerActive = useSelector((s) => s.global?.isHamburgerActive)
  return (
    <div>
      <div className="PageHeader">
        <Primitives.Flex className="mainHeader" justifyContent="space-between"
    alignItems="center">
          <React.Fragment>
            <div className="UserLogged">
              <p>React Version {REACT_VERSION}</p>
              <LoggedUser />
            </div>
           {isMobile ? <div
              class="burger-menu-icon"
              id={isHamburgerActive && active ?  "toggleDisableIcon" : active ? "toggleActiveIcon" : "" }
              onClick={ToggleMenu}
            >
              <div class="line1"></div>
              <div class="line2"></div>
              <div class="line3"></div>
            </div> : null }
            {!isMobile ? <LoggedUserwithImage /> : null}
            <div
              className="pageGlobalNav"
              id={isHamburgerActive && active ? "toggleDisable" : active ? "toggleActive" : "" }
            >
              <ReactHeader onClick={setHamburgerActive}>{isMobile ? <LoggedUserwithImage /> : null}</ReactHeader>  
            </div>
          </React.Fragment>
        </Primitives.Flex>
      </div>
      {children}
    </div>
  );
};

const LoggedUser = () => {
  let usersign_in_mail = localStorage.getItem("usersigninmail");
  return (
    <p className="loggedusermain">
      <span className="LoggedUser">{usersign_in_mail}</span>
    </p>
  );
};

export {HeaderNav}

