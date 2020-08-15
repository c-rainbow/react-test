
import React from 'react';
import PageWrapper from './PageWrapper';
import ChatDownloaderCard from '../card/ChatDownloaderCard';


function DownloaderPageContent() {
    return (
        <div className="container-fluid">
            {/* Content Row */}
            <div className="row">


            {/* Project Card Example */}
            <ChatDownloaderCard title="다시보기 채팅 다운받기" />

            {/* Content Column */}
            <div className="col-6 mb-4">
                {/* Project Card Example */}
                <div className="card shadow mb-12">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">팔로워 목록 다운받기</h6>
                </div>
                <div className="card-body">
                    <form className="d-block-inline my-2 my-md-0 navbar-search">
                    <div className="input-group">
                        <input type="text" id="streamer-username-input" className="form-control bg-light border-0 small"
                            placeholder="스트리머 아이디(영어)" aria-label="Search" aria-describedby="basic-addon2"/>
                        <div className="input-group-append">
                        <button className="btn btn-primary" type="button" id="streamer-search-button">
                            <i className="fas fa-search fa-sm"></i>
                        </button>
                        </div>
                    </div>
                    </form>
                    <div className="d-block-inline my-2 my-md-0" id="streamer-info">
                    스트리머 정보 들어가는 칸
                    </div>
                    <div className="d-block-inline my-2 my-md-0">
                    <button className="btn btn-secondary d-none" type="button" id="follower-list-download-button">
                        다운로드
                    </button>
                    </div>
                </div>
                </div>
            </div>


            </div>

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
