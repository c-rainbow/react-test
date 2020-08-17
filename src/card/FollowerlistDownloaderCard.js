import React from "react";
import CollapsableBigCard from "./CollapsableBigCard";
import SearchBar from "../components/SearchBar"
import create from "zustand";


const TwitchApiClient = window.twitchapiclient.TwitchApiClient;

export const [useFollowerCache] = create(set => ({
  streamerData: null,
  searchedName: null,
  setSearchResult: (data, searchedName) => set({streamerData: data, searchedName}),
}));


function StreamerInfoElem(props) {
  const streamerData = props.streamerData;
  const searchedName = props.searchedName;
  if(!searchedName) {  // Initial state without any previous search
    return null;
  }
  if(!streamerData) {
    return (
      <div className="mt-2">
        <div className="m-1 text-danger d-flex justify-content-center">
          스트리머를 찾을 수 없습니다: {searchedName}
        </div>
      </div>
    )
  }

  let userDisplayString = streamerData.display_name;
  if(streamerData.display_name.toLowerCase() !== streamerData.name.toLowerCase()) {
    userDisplayString += `(${streamerData.name})`;
  }
  return (
    <div className="mt-2">
      <div className="m-1 d-flex justify-content-center rounded-circle">
        <img src={streamerData.logo} width="150" height="150"
            className="rounded-circle border border-dark" alt="profile logo" />
      </div>
      <div className="m-1 d-flex justify-content-center">{userDisplayString}</div>
      <div className="m-1 d-flex justify-content-center">
        <button class="btn btn-primary">다운로드 시작</button>
      </div>
    </div>
  )
}


export default function FollowerlistDownloaderCard(props) {
  const inputRef = React.createRef();
  const [streamerData, searchedName, setSearchResult] = useFollowerCache(
      state => [state.streamerData, state.searchedName, state.setSearchResult]);

  const onButtonClick = async function() {
    const value = inputRef.current.value;
    if(!value) {
      return;
    }

    const userdata = await TwitchApiClient.getUserByName(value) ?? null;
    setSearchResult(userdata, value);
    console.log("userdata: " + JSON.stringify(userdata));
  }

  return (
    <CollapsableBigCard title={props.title} columnSizes="col-md-12 col-lg-6"
        collapsableBodyId="followerlist-downloader-id">
      <SearchBar placeholder="스트리머 아이디(영어)" inputRef={inputRef} onButtonClick={onButtonClick} />
      <StreamerInfoElem streamerData={streamerData} searchedName={searchedName} />
    </CollapsableBigCard>
  )
}
