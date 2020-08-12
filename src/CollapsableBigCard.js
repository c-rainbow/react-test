import React from "react";


export default function CollapsableBigCard(props) {
    const title = props.title;
    const collapsableBodyId = props.collapsableBodyId;
    const collapseLink = "#" + collapsableBodyId;
    const canvasId = props.canvasId;
    return (
        <div className="col-xl-12 col-lg-12 mb-4">
            <div className="card shadow">
                {/* Card Header - Dropdown */}
                <div className="card-header d-flex flex-row align-items-center justify-content-between">
                    <a href={collapseLink} className="w-100 py-1" data-toggle="collapse"
                        role="button" aria-expanded="true" aria-controls={collapsableBodyId}>
                        <h6 className="m-0 font-weight-bold text-primary">{title}</h6>
                    </a>
                    {/*<div className="dropdown no-arrow">
                        <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" 
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                            <div className="dropdown-header">시간별:</div>
                            <a className="dropdown-item" href="#">1분</a>
                            <a className="dropdown-item" href="#">5분</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">10분</a>
                        </div>
                    </div>*/}
                </div>
                {/* Card Body */}
                <div className="collapse show" id={collapsableBodyId}>
                <div className="card-body">
                    <div className="chart-area">
                        <canvas id={canvasId}></canvas>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}


