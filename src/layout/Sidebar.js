
import React from 'react';

import { Link } from 'react-router-dom';


function iconClasses(iconName) {
    return `fas fa-fw fa-${iconName}`;
}

function textClasses(className, selectedClass) {
    if(className === selectedClass) {
        return `${className} font-weight-bold font-italic`;
    }
    return className;
}

function NavItem(props) {
  return (
    <li className="nav-item">
      <Link className="nav-link" to={props.url} >
        <i className={iconClasses(props.iconName)}></i>
        <span className={textClasses(props.linkClass, props.selectedClass)}>
          {props.linkName}
        </span>
      </Link>  
    </li>
  )
}


function Sidebar(props) {
  return (
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

      {/* Divider */}
      <div className="m-3"/>
      {/* Heading */}
      <div className="sidebar-heading">
        다운로더
      </div>
      
      {/* Nav Item - Follower list downloader */}
      <NavItem url="/react-test/downloader" iconName="running" linkClass="downloader"
        selectedClass={props.selectedClass} linkName="채팅+팔로워 다운로드" />
      
      {/* Divider */}
      <hr className="sidebar-divider"/>
      {/* Heading */}
      <div className="sidebar-heading">
        분석기
      </div>
      
      {/* Nav Item - Streamer mode */}
      <NavItem url="/react-test/analytics/streamer" iconName="paw" linkClass="streamer-mode-analytics"
        selectedClass={props.selectedClass} linkName="스트리머 모드" />
      {/* Nav Item - Moderator mode */}
      <NavItem url="/react-test/analytics/moderator" iconName="toolbox" linkClass="moderator-mode-analytics"
        selectedClass={props.selectedClass} linkName="관리자 모드" />
      {/* Nav Item - Media Editor mode */}
      <NavItem url="/react-test/analytics/media-creator" iconName="cat" linkClass="media-creator-mode-analytics"
        selectedClass={props.selectedClass} linkName="편집자 모드" />

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