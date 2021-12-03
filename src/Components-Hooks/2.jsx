import React, {useState} from 'react'

function HookCounter2() {
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <h2>useState Hook Basic</h2>
            <h3>{count}</h3>
            <div>
                <button onClick={()=>setCount(0)}>Reset</button>
                <button onClick={()=>setCount(prevCount => prevCount + 1)}>Increment</button>
                <button onClick={()=>setCount(prevCount => prevCount - 1)}>Decrement</button>
            </div>
            <hr />
        </div>
    )
}

export default HookCounter2
