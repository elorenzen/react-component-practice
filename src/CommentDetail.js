import React from 'react';
import faker from 'faker';

const CommentDetail = () => {
    return (
        <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()} />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {faker.name.firstName()}
                    </a>
                    <div className="metadata">
                        <span className="date">
                            Posted in {faker.date.month()}
                        </span>
                    </div>
                    <div className="text">{faker.lorem.sentences()}</div>
                </div>
            </div>
    )
};

// Exports component allowing it to be accessed in other files
export default CommentDetail;