import React, {useState} from 'react'

function HookCounter1() {
    const [count, setCount] = useState(0)
    return (
        <div>
            {/* hooks basic example */}
            <h3>{count}</h3>
            <button onClick={()=> setCount(prevCount => prevCount + 1)}>Increment</button>
        </div>
    )
}

export default HookCounter1
