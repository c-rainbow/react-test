import React from "react";
import TopBar from "../layout/TopBar";
import Sidebar from "../layout/Sidebar";


export default function PageWrapper(props) {
  return (
    <>
    <TopBar title={props.topBarTitle} />
    <div id="wrapper">
      <Sidebar selectedClass={props.selectedClass} />
      <div id="content-wrapper" className="d-flex flex-column py-4">
        <div id="content">
          {props.children}
        </div>
      </div>
    </div>
    </>
  )
}




