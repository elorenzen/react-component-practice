import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';



const App = () => {
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.abstract()} />
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
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'));