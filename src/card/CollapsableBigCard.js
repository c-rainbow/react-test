import React from "react";


export default function CollapsableBigCard(props) {
    const title = props.title;
    const collapsableBodyId = props.collapsableBodyId;
    const collapseLink = "#" + collapsableBodyId;
    return (
        <div className="col-xl-12 col-lg-12 mb-4">
            <div className="card shadow">
                {/* Card Header - Dropdown */}
                <div className="card-header d-flex flex-row align-items-center justify-content-between">
                    <a href={collapseLink} className="w-100 py-1" data-toggle="collapse"
                        role="button" aria-expanded="true" aria-controls={collapsableBodyId}>
                        <h6 className="m-0 font-weight-bold text-primary">{title}</h6>
                    </a>
                    {props.headerDropdown}
                </div>
                {/* Card Body */}
                <div className="collapse show" id={collapsableBodyId}>
                    <div className="card-body">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}


