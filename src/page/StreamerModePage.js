import React from 'react';
import TopBar from '../layout/TopBar';
import SmallCard from '../card/SmallCard';
import CollapsableBigCard from '../card/CollapsableBigCard';
import ContentRow from '../layout/ContentRow';
import Sidebar from '../layout/Sidebar';



function StreamerModePageContent() {
  return (
    <div className="container-fluid">

      {/* Page Heading */}
      <div className="d-sm-flex align-items-center ml-4 mr-4">
        <label htmlFor="chatlog-inputfile" className="chatlog-inputfile-upload-label">
          채팅 로그 파일
        </label>
        <input type="file" name="chatlog-inputfile" id="chatlog-inputfile"/> 

        <label htmlFor="followerlist-inputfile" className="followerlist-inputfile-upload-label">
          팔로워 목록 파일
        </label>
        <input type="file" name="followerlist-inputfile" id="followerlist-inputfile"/> 
      </div>
      
      <ContentRow>
        {/* Chat filter area */}
        <div className="col-xl-12 col-lg-12">
          <div className="card shadow mb-4">
            <ContentRow>
              <div className="col-3"></div>
              <div className="col-6">
                <div className="card-body">
                {/* Content Search */}
                <form className="d-block-inline ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                  <div className="input-group">
                  <input type="text" id="filter-text-input" className="form-control bg-light border-0 small"
                      placeholder="필터" aria-label="Search" aria-describedby="basic-addon2"/>
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="button" id="filter-button">
                    <i className="fas fa-search fa-sm"></i>
                    </button>
                  </div>
                  </div>
                </form>
                </div>

              </div>
              <div className="col-3"></div>
            </ContentRow>
            <ContentRow>
              <div className="col-12 m-2">
                <span className="ml-4 mr-2">최근 사용한 필터:</span>
                <span className="ml-1 mr-1">
                <button type="button" className="btn btn-outline-success">
                  비구독자<i className="fas fa-times ml-1" aria-hidden="true"></i>
                </button>
                </span>
                <span className=" ml-1 mr-1">
                <button type="button" className="btn btn-outline-success">
                  아이디 major_tryhard &amp; 생성일 1일 미만
                  <i className="fas fa-times ml-1" aria-hidden="true"></i>
                </button>
                </span>
                <span className=" ml-1 mr-1">
                <button type="button" className="btn btn-outline-success">
                  별 의미 없는 필터
                  <i className="fas fa-times ml-1" aria-hidden="true"></i>
                </button>
                </span>
              </div>
            </ContentRow>
          </div>
        </div>
      </ContentRow>

      {/* Summary info card row */}
      <ContentRow>
        {/* Chatter Count Card */}     
        <div className="col-xl-3 col-md-6 mb-4">
          <SmallCard type="primary" title="채팅 친 사람" content="41명" iconName="bread-slice" />
        </div>
        {/* Chat Count Card */}
        <div className="col-xl-3 col-md-6 mb-4">
          <SmallCard type="success" title="전체 채팅 수" content="481개" iconName="comments" />
        </div>
        {/* Bit Card */}
        <div className="col-xl-3 col-md-6 mb-4">
          <SmallCard type="info" title="총 비트" content="123456개" iconName="clipboard-list" />
        </div>
        {/* Subscription Card */}
        <div className="col-xl-3 col-md-6 mb-4">
          <SmallCard type="warning" title="구독 알림" content="2명" iconName="comments" />
        </div>
      </ContentRow>

      {/* Chat count by time row */}
      <ContentRow>
        <CollapsableBigCard title="시간별 채팅" collapsableBodyId="chat-count-time-series-id"
          headerDropdown={
            <div className="dropdown no-arrow">
              <a className="dropdown-toggle" href="#" role="button" id="chat-count-dropdown-id" 
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
              </a>
              <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="chat-count-dropdown-id">
                <div className="dropdown-header">시간별 보기</div>
                <a className="dropdown-item" href="#">1분</a>
                <a className="dropdown-item" href="#">5분</a>
                <a className="dropdown-item" href="#">10분</a>
              </div>
            </div>
          }
        >
          <div className="chart-area">
            <canvas id="chat-count-time-series-chart-canvas"></canvas>
          </div>
        </CollapsableBigCard>
      </ContentRow>

      {/* Top emotes row */}
      <ContentRow>
        <CollapsableBigCard title="이모티콘 통계" collapsableBodyId="top-emote-count-id"
          headerDropdown={
            <div className="dropdown no-arrow">
              <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" 
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
              </a>
              <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                <div className="dropdown-header">이모티콘</div>
                <a className="dropdown-item" href="#">전체 이모티콘 보기</a>
                <a className="dropdown-item" href="#">스트리머의 이모티콘만 보기</a>
                <div className="dropdown-divider"></div>
                <div className="dropdown-header">다음 이모티콘 종류도 보기</div>
                <a className="dropdown-item" href="#">BetterTTV와 FrankerFaceZ</a>
              </div>
            </div>
          }
        >
          <div className="chart-area">
            <canvas id="top-emote-chart-canvas"></canvas>
          </div>
        </CollapsableBigCard>
      </ContentRow>

      {/* Search bar row */}
      <ContentRow>    
        {/* Chat filter area */}
        <div className="col-xl-4 col-lg-5">
        <div className="card shadow mb-4">
          <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">채팅 필터</h6>
          </div>
          <div className="card-body">
          {/* Content Search */}
          <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
            <div className="input-group">
            <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2"/>
            <div className="input-group-append">
              <button className="btn btn-primary" type="button">
              <i className="fas fa-search fa-sm"></i>
              </button>
            </div>
            </div>
          </form>
          </div>
        </div>
        </div>
        {/* Filtered chat area */}
        <div className="col-xl-8 col-lg-7">
        <div className="card shadow mb-4">
          <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
          <h6 className="m-0 font-weight-bold text-primary">검색 결과</h6>
          </div>
          <div className="card-body">
          <div className="chart-pie pt-4 pb-2">
            <canvas id="myPieChart"></canvas>
          </div>
          <div className="mt-4 text-center small">
            <span className="mr-2">
            <i className="fas fa-circle text-primary"></i>팔로워
            </span>
            <span className="mr-2">
            <i className="fas fa-circle text-success"></i>구독자
            </span>
          </div>
          </div>
        </div>
        </div>

      </ContentRow>
    </div>
  );
}



export default function StreamerModePage() {
  return (
    <div id="wrapper">
      {/* Sidebar starts */}
      <Sidebar />
      {/* Sidebar ends */}
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <TopBar title="스트리머 모드" />
          {/* Begin Page Content */}
          <StreamerModePageContent />
          {/* End Page Content */}
        </div>
      </div>
    </div>
  )
}
