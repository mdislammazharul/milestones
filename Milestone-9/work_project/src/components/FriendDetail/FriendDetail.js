import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    const { friendId } = useParams();
    const [friend, setFriend] = useState({})
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))
    }, [])
    return (
        <div>
            <h1>Name: {friend.name}</h1>
            <h4>Phone: {friend.phone}</h4>
            <h4>Website: {friend.website}</h4>
            <p>Company: {friend?.company?.name}</p>
        </div>
    );
};

export default FriendDetail;