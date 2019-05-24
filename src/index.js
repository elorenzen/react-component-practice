import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';


const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author= {faker.name.firstName()} timeAgo={faker.date.month()} commentText={faker.lorem.sentences()} avatar={faker.image.avatar()} />
            <CommentDetail author= {faker.name.firstName()} timeAgo={faker.date.month()} commentText={faker.lorem.sentences()} avatar={faker.image.avatar()} />
            <CommentDetail author= {faker.name.firstName()} timeAgo={faker.date.month()} commentText={faker.lorem.sentences()} avatar={faker.image.avatar()} />
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'));