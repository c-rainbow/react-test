
import React from 'react';
import TopBar from './TopBar';

function DownloaderPage() {
    return (
        <div id="content">

        <TopBar />

        {/* Begin Page Content */}
        <div className="container-fluid">
            test
            {/* Page Heading */}
            <div className="d-sm-flex align-items-center justify-content-between mt-4 mb-4">
            <a href="https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=59x8jyaudw3pnyi722x3e2x9awh385&redirect_uri=https://c-rainbow.github.io/twitch-analyzer-login/oauth/redirect/intentionally_long_directory_name/to_hide_token_in_address_bar/still_need_to_add_more_characters/but_I_dont_know_what_else_to_say/I_will_just_generate_some_random_string/rsnxh6cjm08oefbznda54mgce1lfi89oa3gw6lr6/ha5daayx8au6tosio9evov7x1s2qejxzu0uaqvzn/lxj71wviygdkcwb09y14rkiiv0rgap1n52h07zkm/pyfurq9t674cghvbn2fxdrpvnr3vobypy2z1mp8l/login.html"
                className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm twitch-login-button">
                <i className="fas fa-download fa-sm text-white-50"></i> 트위치 로그인
            </a>
            </div>

            {/* Content Row */}
            <div className="row">


            {/* Content Column */}
            <div className="col-6 mb-4">
                {/* Project Card Example */}
                <div className="card shadow mb-12">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">다시보기 채팅 다운받기</h6>
                </div>
                <div className="card-body">
                    <form className="d-block-inline my-2 my-md-0 navbar-search">
                    <div className="input-group">
                        <input type="text" id="video-id-input" className="form-control bg-light border-0 small"
                            placeholder="다시보기 번호 (예: 123456789)" aria-label="Search" aria-describedby="basic-addon2"/>
                        <div className="input-group-append">
                        <button className="btn btn-primary" type="button" id="video-search-button">
                            <i className="fas fa-search fa-sm"></i>
                        </button>
                        </div>
                    </div>
                    </form>
                    <div className="d-block-inline my-2 my-md-0" id="video-info">
                    
                    </div>
                    <div className="d-block-inline my-2 my-md-0">
                    <button className="btn btn-secondary d-none" type="button" id="video-chat-download-button">
                        다운로드
                    </button>
                    </div>
                </div>
                </div>
            </div>

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
        {/* /.container-fluid */}

        </div>
    )
}

export default DownloaderPage;