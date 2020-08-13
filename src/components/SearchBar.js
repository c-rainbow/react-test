import React from "react";


export default function SearchBar() {
  return (
    <form className="search-bar-form d-flex">
      <div className="input-group">
        <input type="text" className="form-control bg-light border-0 small" placeholder="필터" aria-label="Search" />
        <div className="input-group-append">
          <button className="btn btn-primary" type="button">
            <i className="fas fa-search fa-sm"></i>
          </button>
        </div>
      </div>
    </form>
  )
}
