import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Post = (props) => {
    const { title, id } = props.post;
    const history = useHistory();

    const handleClick = () => {
        history.push(`/post/${id}`);
    }
    return (
        <div>
            <h2>Title: {title}</h2>
            <Link to={`/post/${id}`}>Post Detail</Link>
            <br />
            <button onClick={handleClick}>Click for Details</button>
        </div>
    );
};

export default Post;