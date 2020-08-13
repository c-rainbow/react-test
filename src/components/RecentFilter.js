import React from "react";


export default function RecentFilter(props) {
  return (
    <span className=" ml-1 mr-1">
      <button type="button" className="btn btn-outline-success">
        {props.text}
        <i className="fas fa-times ml-1" aria-hidden="true"></i>
      </button>
    </span>
  )
}