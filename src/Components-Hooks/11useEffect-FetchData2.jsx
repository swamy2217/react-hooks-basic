import React, {useState, useEffect} from 'react'
import axios from 'axios';

function FetchDataWithgetRecord() {
    // fetch single record by axios 
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [idFromButtonClick, setButtonClickHandler] = useState(1);

    const handleButtonClick = () => {
        setButtonClickHandler(id);
    }

    useEffect( () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then (res => {
                console.log (res.data);
                setPost(res.data);
            })
            .catch( err => {
                console.log(err);
            })
    }, [idFromButtonClick])

    return (
        <div>
            <h2>useEffect Hook: get single record value on button click using axios</h2>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <button onClick={handleButtonClick}>FetchData</button>
            <p>{post.title}</p>
            <hr/>

            
        </div>
    )
}

export default FetchDataWithgetRecord
