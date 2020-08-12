
import React from 'react';

import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            {/* Sidebar - Brand */}
            <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                <div className="sidebar-brand-icon">
                    <i className="fas fa-smile-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">다시보기 분석기</div>
            </Link>

            {/* Divider */}
            <hr className="sidebar-divider"/>

            {/* Heading */}
            <div className="sidebar-heading">
                다운로더
            </div>

            {/* Nav Item - Follower list downloader */}
            <li className="nav-item">
                <Link className="nav-link" to="/downloader" >
                    <i className="fas fa-fw fa-running"></i>
                    <span>채팅+팔로워 다운로드</span>
                </Link>                
            </li>

            {/* Divider */}
            <hr className="sidebar-divider"/>

            {/* Heading */}
            <div className="sidebar-heading">
                분석기
            </div>

            {/* Nav Item - Streamer mode */}
            <li className="nav-item">
                <Link className="nav-link" to="/analytics/streamer" >
                    <i className="fas fa-fw fa-paw"></i>
                    <span>스트리머 모드</span>
                </Link>  
            </li>

            {/* Nav Item - Moderator mode */}
            <li className="nav-item">
                <a className="nav-link" href="/analytics/moderator">
                <i className="fas fa-fw fa-toolbox"></i>
                <span>관리자 모드</span></a>
            </li>

            {/* Nav Item - Moderator mode */}
            <li className="nav-item">
                <a className="nav-link" href="/analytics/mediaeditor">
                <i className="fas fa-fw fa-user-graduate"></i>
                <span>편집자 모드</span></a>
            </li>

            {/* Divider */}
            <hr className="sidebar-divider d-none d-md-block"/>

            {/* Sidebar Toggler (Sidebar) */}
            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>    
        </ul>
    )
}

export default Sidebar;