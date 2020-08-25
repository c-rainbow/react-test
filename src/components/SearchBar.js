import React from "react";


export default function SearchBar(props) {
  const buttonRef = React.createRef();
  const keyDown = function(e) {
    if(e.keyCode === 13) {
      e.preventDefault();
      buttonRef.current.click();
    }
  }

  return (
    <form className="search-bar-form d-flex">
      <div className="input-group">
        <input type="text" ref={props.inputRef} className="form-control bg-light border-0 small"
            onKeyDown={keyDown} placeholder={props.placeholder} aria-label="Search" />
        <div className="input-group-append">
          <button ref={buttonRef} className="btn btn-info" type="button" onClick={props.onButtonClick}>
            <i className="fas fa-search fa-sm"></i>
          </button>
        </div>
      </div>
    </form>
  )
}
