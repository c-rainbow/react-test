import React from "react";

import CollapsableBigCard from "./CollapsableBigCard";
import ContentRow from "../layout/ContentRow";
import { useRepositoryStore } from "../states/repository";


function getChatlogFileName() {
  return sessionStorage.getItem("chatlog_file_name") || null;
}

function getFollowerlistFileName() {
  return sessionStorage.getItem("followerlist_file_name") || null; 
}


export default function VideoInfoCard() {
  const chatlogFileMessage = getChatlogFileName() || "";
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
          <span>{chatlogFileMessage}</span>
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

      <hr className="divider"/>
      <ContentRow>
        <div className="col-sm-12 col-md-6 col-lg-4 my-1">
        스트리머: 누구누구(username)
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 my-1">
        방송 제목: 무슨무슨제목
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 my-1">
        카테고리: Just Chatting
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 my-1">
        방송 시작: 2020년 8월 13일 6:53AM
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 my-1">
        방송 시간: 7시간 1분
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 my-1">
        총 채팅 개수: 58822개
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 my-1">
        총 비트: 300개
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 my-1">
        총 구독 (선물 제외): 3명
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 my-1">
        총 구독 선물: 22명
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 my-1">
        총 팔로워 수: 1000명
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 my-1">
          팔로워 목록 기준 시간: 2020년 8월 3일 3:01PM
        </div>
      </ContentRow>
    </CollapsableBigCard>
  )
}