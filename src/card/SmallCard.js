
import React from 'react';


function classNames(type) {
    return `card border-left-${type} shadow h-100 py-2`;
}

function iconClassNames(iconName) {
    return `fas fa-${iconName} fa-2x text-gray-300`;
}


export default function SmallCard(props) {
    return (
        <div className={classNames(props.type)}>
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                            {props.title}
                        </div>
                        <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                            {props.content}
                        </div>
                    </div>
                    <div className="col-auto">
                        <i className={iconClassNames(props.iconName)}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}