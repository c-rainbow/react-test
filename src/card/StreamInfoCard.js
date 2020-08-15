import React from "react";

import CollapsableBigCard from "./CollapsableBigCard";
import ContentRow from "../layout/ContentRow";
import { useRepositoryStore } from "../states/repository";
import create from "zustand";


const [useFilenameStore] = create(set => ({
  chatlogFilename: null,
  followerlistFilename: null,
  setChatlogFile: (filename) => set({chatlogFilename: filename}),
  setFollowerlistFile: (filename) => set({followerlistFilename: filename})
}));


export default function StreamInfoCard() {
  const chatlogInputFileElemRef = React.createRef();
  const followerlistInputFileElemRef = React.createRef();
  
  const [chatlogFilename, setChatlogFile, followerlistFilename, setFollowerlistFile] = useFilenameStore(
      state => [state.chatlogFilename, state.setChatlogFile,
          state.followerlistFilename, state.setFollowerlistFile]);
  
  let chatlogFilenameElem = null;
  if(chatlogFilename !== null) {
    chatlogFilenameElem = <span className="ml-2">{chatlogFilename}</span>;
  }
  let followerlistFilenameElem = null;
  if(followerlistFilename !== null) {
    followerlistFilenameElem = <span className="ml-2">{followerlistFilename}</span>;
  }

  const [currentRepo, loadNewRepo] = useRepositoryStore(
      state => ([state.repository, state.loadNewRepo]));
  const readChatlogFile = function() { 
    const fr = new FileReader(); 
    fr.onload = function() { 
      setChatlogFile(fileToRead.name);

      const content = fr.result.toString();

      const beforeParse = performance.now();
      const jsonContent = JSON.parse(content);
      const afterParse = performance.now();
      console.log("Parse time: " + (afterParse - beforeParse) + "ms");

      const commentDatas = jsonContent["comments"] || [];

      const beforeRepo = performance.now();
      const CommentRepository = window.commentrepository.CommentRepository;
      const originalRepository = CommentRepository.fromCommentsData(commentDatas);
      const afterRepo = performance.now();
      console.log("Repository time: " + (afterRepo - beforeRepo) + "ms");

      loadNewRepo(originalRepository);
      const end = performance.now();
      console.log("Load time: " + (end - start) + "ms");
    }    
    const fileToRead = chatlogInputFileElemRef.current.files[0];
    const start = performance.now();
    fr.readAsText(fileToRead); 
  }

  const readFollowerlistFile = function() {
    const fr = new FileReader();
    fr.onload = function() {
      setFollowerlistFile(fileToRead.name);

      const content = fr.result;//.toString();
      
      const beforeParse = performance.now();
      const jsonContent = JSON.parse(content);
      const afterParse = performance.now();
      console.log("Parse time: " + (afterParse - beforeParse) + "ms");
      
      const followerlist = jsonContent["followers"] || [];
      
      //originalRepo.addFollowerlist(followerlist);
      if(1 === true) currentRepo.addFollowerlist(followerlist);
      const end = performance.now();
      console.log("Followerlist load time: " + (end - start) + "ms");
    }
    const fileToRead = followerlistInputFileElemRef.current.files[0];
    const start = performance.now();
    fr.readAsArrayBuffer(fileToRead); 
  }

  return (
    <CollapsableBigCard title="영상 정보" columnSizes="col-12" collapsableBodyId="video-info-id">
      <ContentRow>
        <div className="col-sm-12 col-md-6">
          <span className="button-container">
            <label htmlFor="chatlog-inputfile" className="btn btn-secondary chatlog-inputfile-upload-label">
              채팅 로그 파일 선택
            </label>
            <input type="file" name="chatlog-inputfile" id="chatlog-inputfile" className="d-none"
              ref={chatlogInputFileElemRef} onChange={readChatlogFile} />
          </span>
          {chatlogFilenameElem}
        </div>
        <div className="col-sm-12 col-md-6">
        <span className="button-container">
          <label htmlFor="followerlist-inputfile" className="btn btn-secondary chatlog-inputfile-upload-label">
            팔로워 목록 파일 선택
          </label>
          <input type="file" name="followerlist-inputfile" id="followerlist-inputfile" className="d-none"
              ref={followerlistInputFileElemRef} onChange={readFollowerlistFile} />
          </span>
          {followerlistFilenameElem}
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
    //["총 이모티콘 사용 개수 (중복 포함)", ......, "개"],
    //["총 쓰인 이모티콘 종류 (중복 제외)", ......, "가지"],
    ["채팅 친 사람 수", repository.getUserCount(), "명"],
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