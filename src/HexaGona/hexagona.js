import React from "react";
import "./hexagonal.scss";
import Tweet from "../TweetCard/tweet";
import Table from "../TableData/app";
import tabledata from "../JSONData/data";
import tweetcard1 from "../JSONData/tweetcard1";
import GitFiles from "../GitFileSystem/gitfile";
import filesystem from "../JSONData/gitfiles";
import ShoppingList from "../ShoppingList/shoppingpage/shoppinglist";

class Hexagonal extends React.Component {
  state = {
    loginuser: "Palguna Ganta",
    showHideTweet: true,
    showHideTable: false,
    showHideGitFiles: false,
    showHideShoppingcart: false,
  };
  AllFalse = (prevState, tempObj) => {
    tempObj = Object.keys(prevState).map((item) => (prevState[item] = false));
  };

 
  hideComponent = (name) => {
    switch (name) {
      case "showHideTweet":
        this.setState((prevState) => {
          let tempObj;
          this.AllFalse(prevState, tempObj);
          return { ...tempObj, showHideTweet: true };
        });
        break;
      case "showHideTable":
        this.setState((prevState) => {
          let tempObj;
          this.AllFalse(prevState, tempObj);
          return { ...tempObj, showHideTable: true };
        });
        break;
      case "showHideGitFiles":
        this.setState((prevState) => {
          let tempObj;
          this.AllFalse(prevState, tempObj);
          return { ...tempObj, showHideGitFiles: true };
        });
        break;
      case "showHideShoppingcart":
        this.setState((prevState) => {
          let tempObj;
          this.AllFalse(prevState, tempObj);
          return { ...tempObj, showHideShoppingcart: true };
        });
        break;
      default:
        return this.state;
    }
  };

  render() {
    const {
      showHideTweet,
      showHideTable,
      showHideGitFiles,
      showHideShoppingcart,
    } = this.state;
    return (
      <div>
        <div className="hexGrid">
          <span>Select any Module</span>
          <ul className="hex-grid__list">
           
            <li className="hex-grid__item">
              <div className="hex-grid__content">
                  <a href="#tweet">
                <button
                  className={showHideTweet && "active"}
                  onClick={() => this.hideComponent("showHideTweet")}
                >
                  TWEET
                </button>
                </a>
              </div>
            </li>
           
            <li className="hex-grid__item">
              <div className="hex-grid__content">
              < a href="#table">
                <button
                  className={showHideTable && "active"}
                  onClick={() => this.hideComponent("showHideTable")}
                >
                  TABLE
                </button>
                </a>
              </div>
            </li>
           
            
            <li className="hex-grid__item">
              <div className="hex-grid__content">
                  <a href="#shopping">
                <button
                  className={showHideShoppingcart && "active"}
                  onClick={() => this.hideComponent("showHideShoppingcart")}
                >
                  SHOPPING CARTS
                </button>
                </a>
              </div>
            </li>
            <li className="hex-grid__item">
              <div className="hex-grid__content">
                <a href="#git">
                <button
                  className={showHideGitFiles && "active"}
                  onClick={() => this.hideComponent("showHideGitFiles")}
                >
                  GIT
                </button>
                </a>
              </div>
            </li>
            <li className="hex-grid__item">
              <div className="hex-grid__content"><button>Comming Soon</button></div>
            </li>
          </ul>
        </div>
        <div className="Selected">
          {showHideTweet && <Tweet carddata={tweetcard1} />}
          {showHideTable && <Table datatable={tabledata} />}
          {showHideGitFiles && <GitFiles files={filesystem} />}
          {showHideShoppingcart && <ShoppingList />}
        </div>
      </div>
    );
  }
}

export default Hexagonal;
