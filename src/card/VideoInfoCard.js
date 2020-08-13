import React from "react";

import CollapsableBigCard from "./CollapsableBigCard";
import ContentRow from "../layout/ContentRow";
import create from "zustand";


const [repositoryStore] = create(set => ({
  originalRepository: null,
  repository: null,
  loadNewRepo: (repo) => set(state => {originalRepository: repo; repository: repo}),
  setFilteredRepo: (filtered) => set({repository: filtered}),
}))


function readChatlogFile() { 
  const fr = new FileReader(); 
  fr.onload = function(){ 
    const content = fr.result.toString();
    const jsonContent = JSON.parse(content);
    const commentRepo = window.commentrepository.CommentRepository;
    const originalRepository = commentRepo.fromCommentsData(jsonContent["comments"]);
    repositoryStore.loadNewRepo(originalRepository);
    
    //updateDom();
  }    
  fr.readAsText(inputFileElem.files[0]); 
}

function getChatlogFileName() {
  return sessionStorage.getItem("chatlog_file_name") || null;
}

function getFollowerlistFileName() {
  return sessionStorage.getItem("followerlist_file_name") || null;
}


export default function VideoInfoCard() {
  const useState = 
  const chatlogFileMessage = getChatlogFileName() || "";
  const followerlistFileMessage = getFollowerlistFileName() || "";
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
              onChange={readChatlogFile()} />
            <span>{chatlogFileMessage}</span>
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
            <div className="col-sm-12 col-md-6 col-lg-4">
            스트리머: 누구누구(username)
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
            방송 제목: 무슨무슨제목
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
            카테고리: Just Chatting
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
            방송 시작: 2020년 8월 13일 6:53AM
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
            방송 시간: 7시간 1분
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
            총 채팅 개수: 58822개
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
            총 비트: 300개
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
            총 구독 (선물 제외): 3명
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
            총 구독 선물: 22명
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
            총 팔로워 수: 1000명
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              팔로워 목록 기준 시간: 2020년 8월 3일 3:01PM
            </div>
          </ContentRow>
    </CollapsableBigCard>
  )
}