import React from "react";
import { useRepositoryStore } from "../states/repository";
import CollapsableBigCard from "./CollapsableBigCard";


function getTimeDisplayString(comment) {
  let rTime = Math.floor(comment.relativeTime);
  
  const seconds = rTime % 60;
  let timeString = seconds.toString().padStart(2, "0");
   
  rTime = Math.floor(rTime / 60);
  const minutes = rTime % 60;
  timeString = minutes.toString().padStart(2, "0") + ":" + timeString;

  rTime = Math.floor(rTime / 60);
  if(rTime > 0) {
    timeString = rTime.toString().padStart(2, "0") + ":" + timeString;
  }

  timeString = timeString.padStart(8);
  return timeString;
}


function getCommentColor(comment) {
  return comment.userColor ?? "#aaa";
}


function SingleChat(props) {
  const comment = props.comment;
  const index = props.index;
  return (
    <div className="my-1" key={index.toString()}>
      <span class="small">{getTimeDisplayString(comment)} </span>
      <span className="large font-weight-bold" style={{color: getCommentColor(comment)}}>
        {comment.user.getDisplayString()}
      </span>
      <span>: </span>
      {/* Is this a good way to use dangerouslySetInnerHTML here? */}
      <span dangerouslySetInnerHTML={{__html: comment.htmlText}} />
    </div>  
  )
}


export default function ChatListCard(props) {
  const currentRepo = useRepositoryStore(state => state.repository);
  let chatListComponent = null;
  if(currentRepo !== null) {

    let comments = currentRepo.getComments();
    if(comments.length > 100) {
      comments = comments.slice(0, 100); 
    }
    console.log("Comment length: " + comments.length);

    chatListComponent = comments.map((comment, index) => (
      <SingleChat comment={comment} index={index} />
    ));
  }
  return (
    <CollapsableBigCard title={props.title} columnSizes="col-12" collapsableBodyId="chat-list-id">
      <div style={{maxHeight: "40rem", overflowY: "scroll"}}>{chatListComponent}</div>
    </CollapsableBigCard>
  )
}