import React from "react";
import { isLoggedIn, loginClientId } from "../loginUtil";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";


const devLoginUrl = "http://localhost:3000/dev/login";
// This is intentionally very long, to hide Oauth token in 
const productionLoginUrl = "https://c-rainbow.github.io/twitch-analyzer-login/oauth/redirect/intentionally_long_directory_name/to_hide_token_in_address_bar/still_need_to_add_more_characters/but_I_dont_know_what_else_to_say/I_will_just_generate_some_random_string/rsnxh6cjm08oefbznda54mgce1lfi89oa3gw6lr6/ha5daayx8au6tosio9evov7x1s2qejxzu0uaqvzn/lxj71wviygdkcwb09y14rkiiv0rgap1n52h07zkm/pyfurq9t674cghvbn2fxdrpvnr3vobypy2z1mp8l/login.html";


function getLoginUrl(props) {
  `https://id.twitch.tv/oauth2/authorize?response_type=token&`
  `client_id=${loginClientId}&redirect_uri=`
}


function UserInfoDiv(props) {
  const loggedIn = props.loggedIn;
  if(loggedIn) {
    return (<>
        <a className="nav-link dropdown-toggle" href="#aaa0" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span className="mr-2 d-none d-lg-inline text-gray-600 small">로그인했음</span>
        </a>
        {/* Dropdown - User Information */}
        <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
          <a className="dropdown-item" href="#aaa1">
            <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
            그냥 의미 없는 메뉴 아이템
          </a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#aaa2" data-toggle="modal" data-target="#logoutModal">
            <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
            { loggedIn ? "로그아웃" : "로그인" }
          </a>
        </div>
    </>)
  }
  else {
    return (
      <a href={"https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=59x8jyaudw3pnyi722x3e2x9awh385&redirect_uri=" + devLoginUrl}
        className="d-sm-inline-block btn btn-sm shadow-sm twitch-login-button"
        style={{backgroundColor:"#9146ff", color: "#eaeaea"}}>
        <i className="fab fa-twitch text-white-50"></i> 로그인
      </a>
    )
  }
}


export default function TopBar() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-white shadow sticky-top">
      
      <Link className="brand d-flex" to="/">
        <h3 className="text-dark">다시보기 분석기</h3>
      </Link>

      <div className="col-sm-6 col-xs-12 ml-auto">
        <SearchBar placeholder="필터" />
      </div>

      {/* Topbar Navbar */}
      <ul className="navbar-nav ml-auto">
        {/* Nav Item - User Information */}
        <li className="nav-item dropdown no-arrow">
          <UserInfoDiv loggedIn={isLoggedIn()} />
        </li>
      </ul>
    </nav>
  )
};