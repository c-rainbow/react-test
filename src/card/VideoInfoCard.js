import React from "react";

import CollapsableBigCard from "./CollapsableBigCard";
import ContentRow from "../layout/ContentRow";
import { useRepositoryStore } from "../states/repository";


function getFollowerlistFileName() {
  return sessionStorage.getItem("followerlist_file_name") || null; 
}





export default function VideoInfoCard() {
  const followerlistFileMessage = getFollowerlistFileName() || "";
  const inputFileElemRef = React.createRef();
  const {currentRepo, loadNewRepo} = useRepositoryStore(
    state => ({currentRepo: state.repository, loadNewRepo: state.loadNewRepo}));

  const readChatlogFile = function() { 
    const fr = new FileReader(); 
    fr.onload = function(){ 
      const content = fr.result.toString();

      const jsonContent = JSON.parse(content);
      const commentDatas = jsonContent["comments"] || [];
      const CommentRepository = window.commentrepository.CommentRepository;
      const originalRepository = CommentRepository.fromCommentsData(commentDatas);
      loadNewRepo(originalRepository);
    }    
    fr.readAsText(inputFileElemRef.current.files[0]); 
  }

  let commentCount = 0;
  if(currentRepo !== null) {
    commentCount = currentRepo.getCommentCount();
  }
  return (
    <CollapsableBigCard title="영상 정보" columnSizes="col-12" collapsableBodyId="video-info-id">
      <ContentRow>
        <div className="col-sm-12 col-md-6">
          <button className="btn btn-secondary m-1">
            <label htmlFor="chatlog-inputfile" className="chatlog-inputfile-upload-label mb-0">
              채팅 로그 파일 선택 
            </label>
          </button>
          <input type="file" name="chatlog-inputfile" id="chatlog-inputfile" className="d-none"
            ref={inputFileElemRef} onChange={readChatlogFile} />
          <span>Comment count: {commentCount}</span>
        </div>
        <div className="col-sm-12 col-md-6">
          <button className="btn btn-secondary m-1">
            <label htmlFor="followerlist-inputfile" className="followerlist-inputfile-upload-label mb-0">
              팔로워 목록 파일 선택
            </label>
          </button>
          <input type="file" name="followerlist-inputfile" id="followerlist-inputfile" className="d-none" />
          <span>{followerlistFileMessage}</span>
        </div>
      </ContentRow>
      <StreamInfo repository={currentRepo} />
    </CollapsableBigCard>
  )
}


function StreamInfo(props) {
  const repository = props.repository;
  if(repository === null) {
    return null;
  }

  const data = [
    ["채팅 친 사람 수", repository.getUserCount(), "개"],
    ["총 채팅 개수", repository.getCommentCount(), "개"],
    ["총 비트", repository.getTotalBits(), "비트"]
  ];

  const dataElems = data.map((item, index) => (
    <div className="col-sm-12 col-md-6 col-lg-4 my-1" key={index.toString()}>
      {item[0]}: {item[1]}{item[2]}
    </div>
  ));

  return (
    <>
      <hr className="divider"/>
      <ContentRow>
        {dataElems}
      </ContentRow>
    </>
  )
}