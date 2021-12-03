import React, {useState} from 'react'

function HookCounter1() {
    const [count, setcount] = useState(0)
    return (
        <div>
            {/* hooks basic example */}
            <h3>{count}</h3>
            <button onClick={()=> setcount(prevCount => prevCount + 1)}>Increment</button>
        </div>
    )
}

export default HookCounter1
