import React from "react";
import { isLoggedIn } from "../loginUtil";


function UserInfoDiv(props) {
    const loggedIn = props.loggedIn;
    if(loggedIn) {
        return (<>
                <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">Valerie Luna</span>
                    <img className="img-profile rounded-circle" src="https://source.unsplash.com/QAB-WJcbgJk/60x60"/>
                </a>
                {/* Dropdown - User Information */}
                <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                    <a className="dropdown-item" href="#">
                        <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                        그냥 의미 없는 메뉴 아이템
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                        { loggedIn ? "로그아웃" : "로그인" }
                    </a>
                </div>
        </>)
    }
    else {
        return (
            <a href="https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=59x8jyaudw3pnyi722x3e2x9awh385&redirect_uri=https://c-rainbow.github.io/twitch-analyzer-login/oauth/redirect/intentionally_long_directory_name/to_hide_token_in_address_bar/still_need_to_add_more_characters/but_I_dont_know_what_else_to_say/I_will_just_generate_some_random_string/rsnxh6cjm08oefbznda54mgce1lfi89oa3gw6lr6/ha5daayx8au6tosio9evov7x1s2qejxzu0uaqvzn/lxj71wviygdkcwb09y14rkiiv0rgap1n52h07zkm/pyfurq9t674cghvbn2fxdrpvnr3vobypy2z1mp8l/login.html"
                className="d-sm-inline-block btn btn-sm btn-primary shadow-sm twitch-login-button">
                <i className="fab fa-twitch text-white-50"></i> 로그인
            </a>
        )
    }
}


export default function TopBar({title}) {
    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            {/* Sidebar Toggle (Topbar) */}
            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
            <   i className="fa fa-bars"></i>
            </button>

            <h1 className="h3 mb-0 text-gray-800">{title}</h1>

            {/* Topbar Search */}
            <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
            <div className="input-group">
                <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                <div className="input-group-append">
                <button className="btn btn-primary" type="button">
                    <i className="fas fa-search fa-sm"></i>
                </button>
                </div>
            </div>
            </form>

            {/* Topbar Navbar */}
            <ul className="navbar-nav ml-auto">

                {/* Nav Item - Search Dropdown (Visible Only XS) */}
                <li className="nav-item dropdown no-arrow d-sm-none">
                    <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-search fa-fw"></i>
                    </a>
                    {/* Dropdown - Messages */}
                    <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
                    <form className="form-inline mr-auto w-100 navbar-search">
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
                </li>

                {/* Nav Item - Messages */}
                <li className="nav-item dropdown no-arrow mx-1">
                    <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-envelope fa-fw"></i>
                    {/* Counter - Messages */}
                    <span className="badge badge-danger badge-counter">7</span>
                    </a>
                    {/* Dropdown - Messages */}
                    <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="messagesDropdown">
                    <h6 className="dropdown-header">
                        Message Center
                    </h6>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                        <div className="dropdown-list-image mr-3">
                        <img className="rounded-circle" src="https://source.unsplash.com/fn_BT9fwg_E/60x60" alt="" />
                        <div className="status-indicator bg-success"></div>
                        </div>
                        <div className="font-weight-bold">
                        <div className="text-truncate">Hi there! I am wondering if you can help me with a problem I've been having.</div>
                        <div className="small text-gray-500">Emily Fowler · 58m</div>
                        </div>
                    </a>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                        <div className="dropdown-list-image mr-3">
                        <img className="rounded-circle" src="https://source.unsplash.com/AU4VPcFN4LE/60x60" alt="" />
                        <div className="status-indicator"></div>
                        </div>
                        <div>
                        <div className="text-truncate">I have the photos that you ordered last month, how would you like them sent to you?</div>
                        <div className="small text-gray-500">Jae Chun · 1d</div>
                        </div>
                    </a>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                        <div className="dropdown-list-image mr-3">
                        <img className="rounded-circle" src="https://source.unsplash.com/CS2uCrpNzJY/60x60" alt="" />
                        <div className="status-indicator bg-warning"></div>
                        </div>
                        <div>
                        <div className="text-truncate">Last month's report looks great, I am very happy with the progress so far, keep up the good work!</div>
                        <div className="small text-gray-500">Morgan Alvarez · 2d</div>
                        </div>
                    </a>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                        <div className="dropdown-list-image mr-3">
                        <img className="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60" alt="" />
                        <div className="status-indicator bg-success"></div>
                        </div>
                        <div>
                        <div className="text-truncate">Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good...</div>
                        <div className="small text-gray-500">Chicken the Dog · 2w</div>
                        </div>
                    </a>
                    <a className="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
                    </div>
                </li>

                <div className="topbar-divider d-none d-sm-block"></div>

                {/* Nav Item - User Information */}
                <li className="nav-item dropdown no-arrow">
                    <UserInfoDiv loggedIn={isLoggedIn()} />
                </li>

            </ul>

        </nav>
    )
};