import React, {useState, useEffect} from 'react'

function UseEffectTwo() {

    const [name, setName]= useState('');
    const [count, setCount] = useState(0);

    // conditionally run effects
    useEffect(() => {  
        console.log(`conditionally render`); 
        document.title = `You clicked ${count} times`
    }, [count])
    return (
        <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={() => setCount(c => c + 1)}>count {count}</button>
            
        </div>
    )
}

export default UseEffectTwo
