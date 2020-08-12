import React from 'react';
import TopBar from './TopBar';
import SmallCard from './SmallCard';
import CollapsableBigCard from './CollapsableBigCard';
import ContentRow from './ContentRow';




export default function StreamerModePage() {
    return (
        <div id="content">

            <TopBar title={"스트리머 모드"} />

            {/* Begin Page Content */}
            <div className="container-fluid">

            {/* Page Heading */}
            <div className="d-sm-flex align-items-center ml-4 mr-4">
                <label htmlFor="chatlog-inputfile" className="chatlog-inputfile-upload-label">
                    채팅 로그 파일
                </label>
                <input type="file" name="inputfile" id="chatlog-inputfile"/> 
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
                    {/*<div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">채팅 필터</h6>
                    </div>*/}
                </div>
                </div>
            </ContentRow>

            {/* Content Row */}
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

            {/* Content Row */}

            <ContentRow>

                {/* Area Chart */}
                <div className="col-xl-12 col-lg-12 mb-4">
                <div className="card shadow">
                    {/* Card Header - Dropdown */}
                    {/*<a href="#collapse-chat-count" className="d-block card-header py-3" data-toggle="collapse"
                        role="button" aria-expanded="true" aria-controls="collapse-chat-count">*/}
                    <div className="card-header d-flex flex-row align-items-center justify-content-between">
                                            
                        <a href="#collapse-chat-count" className="w-100 py-1" data-toggle="collapse"
                        role="button" aria-expanded="true" aria-controls="collapse-chat-count">
                        <h6 className="m-0 font-weight-bold text-primary">시간별 채팅</h6>
                        </a>
                        <div className="dropdown no-arrow">
                        <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                            <div className="dropdown-header">시간별:</div>
                            <a className="dropdown-item" href="#">1분</a>
                            <a className="dropdown-item" href="#">5분</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">10분</a>
                        </div>
                        </div>
                    </div>
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

                {/* Pie Chart */}
                {/*<div className="col-xl-4 col-lg-5 mb-4">
                <div className="card  h-100">
                    {/* Card Header - Dropdown ->
                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <a href="#collapse-top-chat-count" className="w-100 py-1" data-toggle="collapse"
                        role="button" aria-expanded="true" aria-controls="collapse-top-chat-count">
                        <h6 className="m-0 font-weight-bold text-primary">채팅 순위 Top 5</h6>
                    </a>
                    </div>
                    {/* Card Body ->
                    <div className="collapse show" id="collapse-top-chat-count">
                    <div className="card-body">
                        <div className="chart-pie pt-4 pb-2">
                        <canvas id="top-chatter-chart-canvas"></canvas>
                        </div>
                        <div className="mt-4 text-center small">
                        <span className="mr-2">
                            <i className="fas fa-circle text-primary"></i>이옙 (e_e_f_f)
                        </span>
                        <span className="mr-2">
                            <i className="fas fa-circle text-success"></i>아르도르(carrot972)
                        </span>
                        <span className="mr-2">
                            <i className="fas fa-circle text-info"></i>sorrydionysos
                        </span>
                        <span className="mr-2">
                            <i className="fas fa-circle text-error"></i>기타
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>*/}
            </ContentRow>

            {/* Content Row */}
            <ContentRow>
                <CollapsableBigCard title="이모티콘 통계?" collapsableBodyId="top-emote-count-id"
                    canvasId="top-emote-chart-canvas" />
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
            {/* /.container-fluid */}

        </div>
    );
}