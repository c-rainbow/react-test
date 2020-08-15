import React from "react";
import { useRepositoryStore } from "../states/repository";
import CollapsableBigCard from "./CollapsableBigCard";
import { getTimeDisplayString } from "../util/timeUtil";


function getCommentColor(comment) {
  return comment.userColor ?? "#aaa";
}


function SingleChat(props) {
  const comment = props.comment;
  const index = props.index;
  return (
    <div className="my-1" key={index.toString()}>
      <span className="small">{getTimeDisplayString(comment.relativeTime)} </span>
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
      <SingleChat comment={comment} index={index} key={index} />
    ));
  }
  return (
    <CollapsableBigCard title={props.title} columnSizes="col-12" collapsableBodyId="chat-list-id">
      <div style={{maxHeight: "40rem", overflowY: "scroll"}}>{chatListComponent}</div>
    </CollapsableBigCard>
  )
}