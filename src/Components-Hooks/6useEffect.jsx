import React, { useState, useEffect } from 'react'

function UseEffectHook() {
    const [count, setCount] = useState(0);

    // useEffect runs after every render
    useEffect(() => { 
        console.log(`called on every render`); 
        document.title = `You clicked ${count} times`
    })
    return (
        <div>
            <h2>useEffect Hook: update title on every click</h2>
            <button onClick={() => setCount(count + 1)}>count {count}</button>  
            <hr />          
        </div>
    )
}

export default UseEffectHook
