import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard />
            <CommentDetail author= {faker.name.firstName()} timeAgo={faker.date.month()} commentText={faker.lorem.sentences()} avatar={faker.image.avatar()} />
            <CommentDetail author= {faker.name.firstName()} timeAgo={faker.date.month()} commentText={faker.lorem.sentences()} avatar={faker.image.avatar()} />
            <CommentDetail author= {faker.name.firstName()} timeAgo={faker.date.month()} commentText={faker.lorem.sentences()} avatar={faker.image.avatar()} />
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'));