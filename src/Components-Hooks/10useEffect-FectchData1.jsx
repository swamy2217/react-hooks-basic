import React, {useState, useEffect} from 'react'
import axios from 'axios';


const UseEffectFetchData = () => {
    const [posts, setPosts] = useState([]);

    useEffect( () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then (res => {
                console.log (res.data);
                setPosts(res.data);
            })
            .catch( err => {
                console.log(err);
            })
    }, [])


    return (
        <div>
            <h2>useEffect Hook: get List of records using axios</h2>
            <ul>
                {posts.slice(0,10).map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default UseEffectFetchData