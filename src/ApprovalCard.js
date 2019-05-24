import React from 'react';

const ApprovalCard = () => {
    return (
        <div className="ui card">
            <div className="content">
                SOme text here
            </div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button">Accept</div>
                    <div className="ui basic red button">Decline </div>
                </div>    
            </div>
        </div>
    )
};

export default ApprovalCard;