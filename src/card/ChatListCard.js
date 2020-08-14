import React from "react";
import { useRepositoryStore } from "../states/repository";
import CollapsableBigCard from "./CollapsableBigCard";





function getCommentColor(comment) {
  return comment.userColor ?? "#999";
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
      <div className="my-1" key={index.toString()}>
        <span className="large font-weight-bold" style={{color: getCommentColor(comment)}}>
          {comment.user.getDisplayString()}
        </span>
        <span>: </span>
        {/* Is this a good way to use dangerouslySetInnerHTML here? */}
        <span dangerouslySetInnerHTML={{__html: comment.htmlText}} />
      </div>  
    ));
  }
  return (
    <CollapsableBigCard title={props.title} columnSizes="col-12" collapsableBodyId="chat-list-id">
      <div style={{maxHeight: "40rem", overflowY: "scroll"}}>{chatListComponent}</div>
    </CollapsableBigCard>
  )
}