import React from 'react';
import logo from '../logo.svg';
import './header.css'
import Hooks from '../Hooks/app';
import ProfileCard from '../ProfileCard/app'
import Tweet from '../TweetCard/tweet'
import Table from '../TableData/app'
import tabledata from '../JSONData/data';
import tweetcard1 from '../JSONData/tweetcard1';
import FetchRandomuser from '../FetchRandomuser/app';
import BasicForm from '../basicform/basicform';
import MyProfile from '../MyProfile/profile';
import GitFiles from '../GitFileSystem/gitfile'
import filesystem from '../JSONData/gitfiles';
import Layout from '../SideBar/sidebar';
import ShoppingList from '../ShoppingList/shoppingpage/shoppinglist';


const GlobalNav = ({ headerprop }) => {
   const REACT_VERSION = React.version;
   return (
      <div className="PageHeader">
         <div className="mainHeader">
            <div className="PageLogo"><a href="javascript:void(0)"><img src={logo} /></a> </div>
            <input className="PageSearch" type="search" placeholder="Search" />
         </div>
         <span>React version: {REACT_VERSION}</span>
         <LoggedUser name={headerprop} />
      </div>
   )
}

class HeaderNav extends React.Component {
   state =
      {
         loginuser: "Palguna Ganta",
         showHideProfile: false,
         showHideTweet: false,
         showHideHooks: false,
         showHideTable: false,
         showHideFetchRandomUser: false,
         showHideContactUs: false,
         showHideGitFiles: false,
         showHideSidebar: false,
         showHideShoppingcart: true
      }
   AllFalse = (prevState, tempObj) => {
      tempObj = Object.keys(prevState).map((item) => (prevState[item] = false));
   }
   hideComponent = (name) => {
      switch (name) {
         case "showHideTweet":
            this.setState((prevState) => {
               let tempObj;
               this.AllFalse(prevState, tempObj);
               return { ...tempObj, showHideTweet: true }
            });
            break;
         case "showHideHooks":
            this.setState((prevState) => {
               let tempObj;
               this.AllFalse(prevState, tempObj);
               return { ...tempObj, showHideHooks: true }
            });
            break;
         case "showHideTable":
            this.setState((prevState) => {
               let tempObj;
               this.AllFalse(prevState, tempObj);
               return { ...tempObj, showHideTable: true }
            });
            break;
         case "showHideFetchRandomUser":
            this.setState((prevState) => {
               let tempObj;
               this.AllFalse(prevState, tempObj);
               return { ...tempObj, showHideFetchRandomUser: true }
            });
            break;
         case "showHideContactUs":
            this.setState((prevState) => {
               let tempObj;
               this.AllFalse(prevState, tempObj);
               return { ...tempObj, showHideContactUs: true }
            });
            break;
         case "showHideProfile":
            this.setState((prevState) => {
               let tempObj;
               this.AllFalse(prevState, tempObj);
               return { ...tempObj, showHideProfile: true }
            });
            break;
         case "showHideGitFiles":
            this.setState((prevState) => {
               let tempObj;
               this.AllFalse(prevState, tempObj);
               return { ...tempObj, showHideGitFiles: true }
            });
            break;
         case "showHideSidebar":
            this.setState((prevState) => {
               let tempObj;
               this.AllFalse(prevState, tempObj);
               return { ...tempObj, showHideSidebar: true }
            });
            break;
         case "showHideShoppingcart":
            this.setState((prevState) => {
               let tempObj;
               this.AllFalse(prevState, tempObj);
               return { ...tempObj, showHideShoppingcart: true }
            });
            break;
         default:
            return this.state
      }
   }

   render() {
      const { showHideProfile, showHideTweet, showHideHooks, showHideTable, showHideFetchRandomUser, showHideContactUs, showHideGitFiles, showHideSidebar, showHideShoppingcart } = this.state;
      return (
         <div>
            <GlobalNav headerprop={this.state.loginuser} />
            <div className="navigation">
               <button className={showHideProfile && 'active'} onClick={() => this.hideComponent("showHideProfile")}>
                  Profile
      </button>
               <button className={showHideTweet && 'active'} onClick={() => this.hideComponent("showHideTweet")}>
                  TWEET
      </button>
               <button className={showHideHooks && 'active'} onClick={() => this.hideComponent("showHideHooks")}>
                  HOOKS
      </button>
               <button className={showHideTable && 'active'} onClick={() => this.hideComponent("showHideTable")}>
                  TABLE
      </button>
               <button className={showHideFetchRandomUser && 'active'} onClick={() => this.hideComponent("showHideFetchRandomUser")}>
                  FETCH USER
      </button>
               <button className={showHideSidebar && 'active'} onClick={() => this.hideComponent("showHideSidebar")}>
                  SIDE BAR
      </button>
               <button className={showHideShoppingcart && 'active'} onClick={() => this.hideComponent("showHideShoppingcart")}>
                  SHOPPING CARTS
      </button>

               
                  <button className={showHideContactUs && 'active'} onClick={() => this.hideComponent("showHideContactUs")}>
                     CONTACT US
      </button>
                  <button className={showHideGitFiles && 'active'} onClick={() => this.hideComponent("showHideGitFiles")}>
                     GIT
      </button>
               
            </div>
            <div className="Selected">
               {showHideTweet && <Tweet carddata={tweetcard1} />}
               {showHideHooks &&  <Hooks />}
               {showHideTable &&  <Table datatable={tabledata} />}
               {showHideFetchRandomUser && <FetchRandomuser />}
               {showHideProfile && <MyProfile />}
               {showHideGitFiles && <GitFiles files={filesystem} />}
               {showHideSidebar && <Layout />}
               {showHideContactUs && <BasicForm />}
               {showHideShoppingcart && <ShoppingList />}
            </div>


         </div>
      )
   }
}

const LoggedUser = ({ name }) => {

   return <span className="LoggedUser">{name}</span>
}

export { HeaderNav };