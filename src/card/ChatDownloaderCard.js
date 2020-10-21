import React from "react";
import CollapsableBigCard from "./CollapsableBigCard";
import SearchBar from "../components/SearchBar";
import create from "zustand";


const TwitchApiClient = window.twitchapiclient.TwitchApiClient;
const streamSaver = window.streamSaver;


export const [useVideoCache] = create(set => ({
  videoData: null,
  searchedId: null,
  setSearchResult: (data, searchedId) => set({videoData: data, searchedId}),
}));

const [downloadProgressCache] = create(set => ({
  downloading: false,
  chatCount: 0,
  secondCount: 0,
  startDownload: () => set({downloading: true, chatCount: 0, secondCount: 0}),
  endDownload: () => set({downloading: false, chatCount: 0, secondCount: 0}),
  updateProgress: (chatCount, secondCount) => set({chatCount, secondCount}),
}));


function convertToLocalTime(utcTimeStr, locale="ko-kr") {
  const dateObj = new Date(utcTimeStr);
  // dateStr, timeStr follow the browser time/locale
  const dateStr = dateObj.toLocaleDateString(locale);
  const timeStr = dateObj.toLocaleTimeString(locale);
  return `${dateStr} ${timeStr}`;
}

function getTimeDisplayStr(totalSeconds) {
  //totalSeconds = Math.floor(totalSeconds);
  const hours = Math.floor(totalSeconds / 3600);
  totalSeconds = totalSeconds % 3600;
  const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, "0");
  const seconds = Math.floor(totalSeconds % 60).toString().padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
}


function getDownloadHandler(updateProgressFn, endDownloadFn) {
  let downloadCount = 0;
  const fileStream = streamSaver.createWriteStream("chat_download_text.json", {
    size: 10000,
  });
  const writer = fileStream.getWriter();

  // commentsData is array of comment JSON objects.
  return async function(done, errorMsg, httpStatus, commentsData) {
    //console.log("done: " + done);
    const dataLen = commentsData.length;
    downloadCount += dataLen;
    const lastChatTime = commentsData[dataLen-1]?.content_offset_seconds;
    //console.log("lastChatTime: " + lastChatTime);

    const stringified = JSON.stringify(commentsData);
    console.log("stringified len: " + stringified.length);
    const encoder = new TextEncoder();
    const encoded = encoder.encode(stringified);
    //await writer.write(stringified);
    await writer.write(encoded);

    updateProgressFn(downloadCount, lastChatTime);
    if(done) {
      endDownloadFn();
      writer.close();
    }
  }
}


function ProgressElem(props) {
  //console.log("downloading: " + props.downloading);
  if(!props.downloading) {
    return null;
  }
  return (
    <div className="my-1 ml-3">
      진행상황: {props.chatCount}개 채팅 다운받음
    </div>
  )
}


function VideoInfoElem(props) {
  const videoData = props.videoData;
  const searchedId = props.searchedId; 
  if(!searchedId) {  // Initial state without any previous search
    return null;
  }

  const [downloading, chatCount, secondCount, 
      startDownload, endDownload, updateProgress] = downloadProgressCache(
    state => [state.downloading, state.chatCount, state.secondCount, 
        state.startDownload, state.endDownload, state.updateProgress]);

  const onDownloadButtonClick = function(videoData) {
    const client = new TwitchApiClient();
    
    const handler = getDownloadHandler(updateProgress, endDownload);
    //const downloader = TwitchApiClient.getChatDownloader(handler);
    const downloader = client.getChatDownloader(handler); 
    
    let videoId = videoData._id;
    if(videoId.startsWith("v")) videoId = videoId.slice(1);
    
    console.log("Download start");
    startDownload();
    downloader.downloadChat(videoId);
  }

  if(!videoData) {
    return (
      <div className="mt-2">
        <div className="m-1 text-danger d-flex justify-content-center">
          영상을 찾을 수 없습니다: {searchedId}
        </div>
      </div>
    )
  }

  const channel = videoData.channel;
  let userDisplayString = channel.display_name;
  if(channel.display_name.toLowerCase() !== channel.name.toLowerCase()) {
    userDisplayString += `(${channel.name})`;
  }

  const buttonText = downloading ? "다운로드 중" : "다운로드 시작";
  return (
    <div className="mt-2">
      <div className="my-1 d-flex justify-content-center">
        <img src={videoData.preview?.medium} alt="video preview" />
      </div>
      <div className="my-1 ml-3">제목: {videoData.title}</div>
      <div className="my-1 ml-3">스트리머: {userDisplayString}</div>
      <div className="my-1 ml-3">업로드 : {convertToLocalTime(videoData.created_at)}</div>
      <div className="my-1 ml-3">카테고리: {videoData.game}</div>
      <div className="my-1 ml-3">길이: {getTimeDisplayStr(videoData.length)}</div>
      <div className="my-1 d-flex justify-content-center">
        <button className="btn btn-primary" disabled={downloading}
            onClick={onDownloadButtonClick.bind(null, videoData)}>
          {buttonText}
        </button>
      </div>
      <ProgressElem downloading={downloading} chatCount={chatCount} secondCount={secondCount} />
    </div>
  )
}


export default function ChatDownloaderCard(props) {
  const inputRef = React.createRef();
  const [videoData, searchedId, setSearchResult] = useVideoCache(
      state => [state.videoData, state.searchedId, state.setSearchResult]);

  const onButtonClick = async function() {
    const value = inputRef.current.value.trim();
    if(!value) {
      return;
    }
    const data = await TwitchApiClient.getVideo(value);
    setSearchResult(data, value);
    console.log("Data: " + JSON.stringify(data));
  }

  return (
    <CollapsableBigCard title={props.title} columnSizes="col-md-12 col-lg-6"
        collapsableBodyId="chat-downloader-id">
      <SearchBar placeholder="다시보기 번호 (예: 123456789)" inputRef={inputRef} onButtonClick={onButtonClick} />
      <VideoInfoElem videoData={videoData} searchedId={searchedId} />
    </CollapsableBigCard>
  )
}
