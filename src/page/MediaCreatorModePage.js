import React from 'react';
//import TopBar from '../layout/TopBar';
//import Sidebar from '../layout/Sidebar';
import PageWrapper from './PageWrapper';



function MediaCreatorModePageContent() {
  return (
  <div className="container-fluid">

  {/* Page Heading */}
  <div className="d-sm-flex align-items-center justify-content-between mt-4 mb-4">
    <h1 className="h3 mb-0 text-gray-800">대시보드</h1>
    <input type="file" name="inputfile" id="inputfile"/> 
    <a href="https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=59x8jyaudw3pnyi722x3e2x9awh385&redirect_uri=https://c-rainbow.github.io/twitch-analyzer-login/oauth/redirect/intentionally_long_directory_name/to_hide_token_in_address_bar/still_need_to_add_more_characters/but_I_dont_know_what_else_to_say/I_will_just_generate_some_random_string/rsnxh6cjm08oefbznda54mgce1lfi89oa3gw6lr6/ha5daayx8au6tosio9evov7x1s2qejxzu0uaqvzn/lxj71wviygdkcwb09y14rkiiv0rgap1n52h07zkm/pyfurq9t674cghvbn2fxdrpvnr3vobypy2z1mp8l/login.html"
    className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm twitch-login-button">
    <i className="fas fa-download fa-sm text-white-50"></i> 트위치 로그인
    </a>
  </div>
  
  <div className="row">
    {/* Chat filter area */}
    <div className="col-xl-12 col-lg-12">
    <div className="card shadow mb-4">
      <div className="row">
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
      </div>
      <div className="row">
      <div className="col-12 m-2">
        <span className="ml-4 mr-2">최근 사용한 필터:</span>
        <span className="ml-1 mr-1">
        <button type="button" className="btn btn-outline-success">
          비구독자<i className="fas fa-times ml-1" aria-hidden="true"></i>
        </button>
        </span>
        <span className=" ml-1 mr-1">
        <button type="button" className="btn btn-outline-success">
          아이디 major_trihard &amp; 생성일 1일 미만
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
      </div>
      {/*<div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
      <h6 className="m-0 font-weight-bold text-primary">채팅 필터</h6>
      </div>*/}
    </div>
    </div>
  </div>

  {/* Content Row */}
  <div className="row">   

    {/* Chatter Count Card Example */}
    <div className="col-xl-3 col-md-6 mb-4">
    <div className="card border-left-primary shadow h-100 py-2">
      <div className="card-body">
      <div className="row no-gutters align-items-center">
        <div className="col mr-2">
        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">채팅 친 사람 수</div>
        <div className="h5 mb-0 font-weight-bold text-gray-800 chatter-count-content">39명</div>
        </div>
        <div className="col-auto">
        <i className="fas fa-bread-slice fa-2x text-gray-300"></i>
        </div>
      </div>
      </div>
    </div>
    </div>

    {/* Chat Count Card Example */}
    <div className="col-xl-3 col-md-6 mb-4">
    <div className="card border-left-success shadow h-100 py-2">
      <div className="card-body">
      <div className="row no-gutters align-items-center">
        <div className="col mr-2">
        <div className="text-xs font-weight-bold text-success text-uppercase mb-1">전체 채팅 수</div>
        <div className="h5 mb-0 font-weight-bold text-gray-800 comment-count-content">480개</div>
        </div>
        <div className="col-auto">
        <i className="fas fa-comments fa-2x text-gray-300"></i>
        </div>
      </div>
      </div>
    </div>
    </div>

    {/* Stream Time Example */}
    <div className="col-xl-3 col-md-6 mb-4">
    <div className="card border-left-info shadow h-100 py-2">
      <div className="card-body">
      <div className="row no-gutters align-items-center">
        <div className="col mr-2">
        <div className="text-xs font-weight-bold text-info text-uppercase mb-1">총 비트</div>
        <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800 total-bits-content">491개</div>
        </div>
        <div className="col-auto">
        <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
        </div>
      </div>
      </div>
    </div>
    </div>

    {/* Random Info Card Example */}
    <div className="col-xl-3 col-md-6 mb-4">
    <div className="card border-left-warning shadow h-100 py-2">
      <div className="card-body">
      <div className="row no-gutters align-items-center">
        <div className="col mr-2">
        <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">구독 알림</div>
        <div className="h5 mb-0 font-weight-bold text-gray-800">2명</div>
        </div>
        <div className="col-auto">
        <i className="fas fa-comments fa-2x text-gray-300"></i>
        </div>
      </div>
      </div>
    </div>
    </div>
  </div>

  {/* Content Row */}

  <div className="row">

    {/* Area Chart */}
    <div className="col-xl-12 col-lg-12 mb-4">
      <div className="card shadow">
      {/* Card Header - Dropdown */}
      {/*<a href="#collapse-chat-count" className="d-block card-header py-3" data-toggle="collapse"
        role="button" aria-expanded="true" aria-controls="collapse-chat-count">*/}
      {/*</a>*/}
      {/* Card Body */}
      <div className="collapse show" id="collapse-chat-count">
      <div className="card-body">
        <div className="chart-area">
        <canvas id="top-chatter-chart-canvas"></canvas>
        </div>
      </div>
      </div>
    </div>
    </div>
  </div>


  {/* Content Row */}
  <div className="row">


    {/* Content Column */}
    <div className="col-xl-12 col-lg-12 mb-4">

    {/* Project Card Example */}
    <div className="card shadow mb-12">
      <div className="card-header py-3">
      <h6 className="m-0 font-weight-bold text-primary">이모티콘 통계</h6>
      </div>
      <div className="card-body">
      <div className="chart-bar">
        <canvas id="top-emote-chart-canvas"></canvas>
      </div>
      </div>
    </div>
    </div>
  </div>

  {/* Search bar row */}
  <div className="row">
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

  </div>

  </div>
   )
}


export default function MediaCreatorModePage() {
  return (
    <PageWrapper selectedClass="media-creator-mode-analytics" topBarTitle="편집자 모드">
        <MediaCreatorModePageContent />
    </PageWrapper>
  )
}
