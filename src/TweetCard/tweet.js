import React from 'react';
import './tweet.css'
import TimePrint from '../Time/time.js'
function Avatar(props) {

  return (
    <img alt="tweet-profilr-icon"
      src={props.hash}
      className="avatar"
      alt="avatarIcon" />
  );
}

const Message = (props) => {

  return (
    <div className="message">
      {props.text}
    </div>
  );
}
function NameWithHandle(props) {
  const { name, handle } = props.namehandle;

  return (
    <span className="name-with-handle">
      <span className="name">{name}</span>
      <span className="handle">{handle}</span>
    </span>
  );
}

const ReplyButton = () => (
  <i className="fa fa-reply reply-button" />
);
function getRetweetCount(count) {
  if (count > 0) {
    return (
      <span className="retweet-count">
        {count}
      </span>
    );
  } else {
    return null;
  }
}
const RetweetButton = ({ count }) => (
  <span className="retweet-button">
    <i className="fa fa-retweet" />
    {getRetweetCount(count)}
  </span>
);
const LikeButton = ({ count }) => (

  <span className="like-button">
    <i className="fa fa-heart" />

    <span className="like-count">
      {count ? count : null}
    </span>
  </span>
);

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button" />
);

///const TweetContext=React.createContext("hello",() =>{ })

const Tweet = (props) => {
  const itemdata = props.carddata;
  return (
    <div className="TweetMain">{itemdata.map((item, i) => {
      return (
        <div className="tweet">

          <Avatar hash={item.gravatar} />
          <div className="content">
            <NameWithHandle namehandle={item.author} />
            <TimePrint time={item.timestamp} />
            <Message text={item.message} />
            <div className="buttons">
              <ReplyButton />
              <RetweetButton count={item.retweets} />
              <LikeButton count={item.likes} />
              <MoreOptionsButton />
            </div>
          </div>

        </div>)
    })}
    </div>)
}

export default Tweet ;
