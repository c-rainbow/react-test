import React from 'react';
import ContentRow from '../layout/ContentRow';
import PageWrapper from './PageWrapper';
import StreamInfoCard from '../card/StreamInfoCard';
import TopChatterChartCard from '../card/TopChatterChartCard';
import ChatCountTimeSeriesCard from '../card/ChatCountTimeSeriesCard';
import TopEmotesChartCard from '../card/TopEmotesChartCard';
import ChatListCard from '../card/ChatListCard';



function StreamerModePageContent() {
  return (
    <div className="container-fluid">
      {/* Video info row */}
      <ContentRow>
        <StreamInfoCard />
      </ContentRow>

      {/* Chat count by time row */}
      <ContentRow>
        <ChatCountTimeSeriesCard title="시간별 채팅" />
      </ContentRow>

      {/* Chat content row */}
      <ContentRow>
        {/* Filtered chat area */}
        <ChatListCard title="채팅 검색 결과" />
      </ContentRow>

      {/* Top Chatter row */}
      <ContentRow>
        <TopChatterChartCard title="채팅 랭킹" />
      </ContentRow>

      {/* Top emotes row */}
      <ContentRow>
        <TopEmotesChartCard title="이모티콘 통계" />
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
