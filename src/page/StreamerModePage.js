import React from 'react';
import CollapsableBigCard from '../card/CollapsableBigCard';
import ContentRow from '../layout/ContentRow';
import SearchBar from '../components/SearchBar';
import RecentFilter from '../components/RecentFilter';
import PageWrapper from './PageWrapper';
import VideoInfoCard from '../card/VideoInfoCard';
import TopChatterChartCard from '../card/TopChatterChartCard';
import ChatCountTimeSeriesCard from '../card/ChatCountTimeSeriesCard';
import TopEmotesChartCard from '../card/TopEmotesChartCard';



function StreamerModePageContent() {
  return (
    <div className="container-fluid">
      {/* Video info row */}
      <ContentRow>
        <VideoInfoCard />
      </ContentRow>

      {/* Top Chatter row */}
      <ContentRow>
        <TopChatterChartCard title="채팅 랭킹" />
      </ContentRow>

      {/* Chat count by time row */}
      <ContentRow>
        <ChatCountTimeSeriesCard title="시간별 채팅" />
      </ContentRow>

      {/* Top emotes row */}
      <ContentRow>
        <TopEmotesChartCard title="이모티콘 통계" />
      </ContentRow>

      {/* Chat content row */}
      <ContentRow>
        {/* Chat filter area */}
        <CollapsableBigCard title="최근 사용한 채팅 필터" columnSizes="col-xl-4 col-lg-5" collapsableBodyId="chat-search-bar-id">
          <SearchBar />
        </CollapsableBigCard>
        {/* Filtered chat area */}
        <CollapsableBigCard title="채팅 검색 결과" columnSizes="col-xl-8 col-lg-7" collapsableBodyId="filtered-chat-list-id">
          {/* Chat contents will be added here later */}
          <div className="filtered-chats"></div>
        </CollapsableBigCard>
      </ContentRow>
    </div>
  );
}


export default function StreamerModePage() {
  return (
    <PageWrapper selectedClass="streamer-mode-analytics" topBarTitle="스트리머 모드">
      <StreamerModePageContent />
    </PageWrapper>
  )
}


function text() {
  return (<ContentRow>
        {/* Chat filter area */}
        <div className="col-xl-12 col-lg-12">
          <div className="card shadow mb-4 mt-2">
            <ContentRow>
              <div className="col-3"></div>
              <div className="col-lg-6 col-sm-12">
                <div className="card-body">
                  {/* Content Search */}
                  <SearchBar />
                </div>
              </div>
              <div className="col-3"></div>
            </ContentRow>
            <ContentRow>
              <div className="col-12 m-2">
                <span className="ml-4 mr-2">최근 사용한 필터:</span>
                <RecentFilter text="비구독자" />
                <RecentFilter text="아이디 major_tryhard &amp; 생성일 1일 미만" />
                <RecentFilter text="별 의미 없는 필터" />
              </div>
            </ContentRow>
          </div>
        </div>
      </ContentRow>
  )
}
