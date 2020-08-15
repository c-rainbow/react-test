
import React from 'react';
import PageWrapper from './PageWrapper';
import ChatDownloaderCard from '../card/ChatDownloaderCard';
import FollowerlistDownloaderCard from '../card/FollowerlistDownloaderCard';
import ContentRow from '../layout/ContentRow';


function DownloaderPageContent() {
  return (
    <div className="container-fluid">
      <ContentRow>
        <ChatDownloaderCard title="다시보기 채팅 다운받기" />
        <FollowerlistDownloaderCard title="팔로워 목록 다운받기" />
      </ContentRow>
    </div>
  )
}


export default function DownloaderPage() {
  return (
    <PageWrapper selectedClass="downloader" topBarTitle="다운로드 페이지">
      <DownloaderPageContent />
    </PageWrapper>
  )
}
