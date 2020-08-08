
import React from 'react';

import {BrowserRouter as Router, Link} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();


function Sidebar() {
    return (
        <div className="Sidebar">
            {/* Sidebar */}
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* Sidebar - Brand */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon">
                <i className="fas fa-smile-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">다시보기 분석기</div>
            </a>

            {/* Divider */}
            <hr className="sidebar-divider"/>

            {/* Heading */}
            <div className="sidebar-heading">
                다운로더
            </div>

            {/* Nav Item - Follower list downloader */}
            <li className="nav-item">
                <Link className="nav-link" to="/downloader" >
                    <i className="fas fa-fw fa-cat"></i>
                    <span>채팅+팔로워 다운로드</span>
                </Link>                
            </li>

            {/* Divider */}
            <hr className="sidebar-divider"/>

            {/* Heading */}
            <div className="sidebar-heading">
                분석기 대시보드
            </div>

            {/* Nav Item - Streamer mode */}
            <li className="nav-item">
                <Link className="nav-link" to="/" >
                    <i className="fas fa-fw fa-cat"></i>
                    <span>스트리머 모드</span>
                </Link>  
            </li>

            {/* Nav Item - Moderator mode */}
            <li className="nav-item">
                <a className="nav-link" href="index.html">
                <i className="fas fa-fw fa-cat"></i>
                <span>관리자 모드</span></a>
            </li>

            {/* Nav Item - Moderator mode */}
            <li className="nav-item">
                <a className="nav-link" href="index.html">
                <i className="fas fa-fw fa-cat"></i>
                <span>편집자 모드</span></a>
            </li>

            {/* Divider */}
            <hr className="sidebar-divider"/>

            {/* Heading */}
            <div className="sidebar-heading">
                Interface
            </div>

            {/* Nav Item - Pages Collapse Menu */}
            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                <i className="fas fa-fw fa-cog"></i>
                <span>Components</span>
                </a>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                    <h6 className="collapse-header">Custom Components:</h6>
                    <a className="collapse-item" href="buttons.html">Buttons</a>
                    <a className="collapse-item" href="cards.html">Cards</a>
                </div>
                </div>
            </li>

            {/* Nav Item - Utilities Collapse Menu */}
            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
                <i className="fas fa-fw fa-wrench"></i>
                <span>Utilities</span>
                </a>
                <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                    <h6 className="collapse-header">Custom Utilities:</h6>
                    <a className="collapse-item" href="utilities-color.html">Colors</a>
                    <a className="collapse-item" href="utilities-border.html">Borders</a>
                    <a className="collapse-item" href="utilities-animation.html">Animations</a>
                    <a className="collapse-item" href="utilities-other.html">Other</a>
                </div>
                </div>
            </li>

            {/* Divider */}
            <hr className="sidebar-divider"/>

            {/* Heading */}
            <div className="sidebar-heading">
                Addons
            </div>

            {/* Nav Item - Pages Collapse Menu */}
            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
                <i className="fas fa-fw fa-folder"></i>
                <span>Pages</span>
                </a>
                <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                    <h6 className="collapse-header">Login Screens:</h6>
                    <a className="collapse-item" href="login.html">Login</a>
                    <a className="collapse-item" href="register.html">Register</a>
                    <a className="collapse-item" href="forgot-password.html">Forgot Password</a>
                    <div className="collapse-divider"></div>
                    <h6 className="collapse-header">Other Pages:</h6>
                    <a className="collapse-item" href="404.html">404 Page</a>
                    <a className="collapse-item" href="blank.html">Blank Page</a>
                </div>
                </div>
            </li>

            {/* Nav Item - Charts */}
            <li className="nav-item">
                <a className="nav-link" href="charts.html">
                <i className="fas fa-fw fa-chart-area"></i>
                <span>Charts</span></a>
            </li>

            {/* Nav Item - Tables */}
            <li className="nav-item">
                <a className="nav-link" href="tables.html">
                <i className="fas fa-fw fa-table"></i>
                <span>Tables</span></a>
            </li>

            {/* Divider */}
            <hr className="sidebar-divider d-none d-md-block"/>

            {/* Sidebar Toggler (Sidebar) */}
            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>

            </ul>
            {/* End of Sidebar */}
        </div>
    )
}

export default Sidebar;