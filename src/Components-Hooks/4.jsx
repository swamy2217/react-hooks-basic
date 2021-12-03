import React, {useState } from 'react'

function HooksArray() {
    const [items, setItems] = useState([]);

    const addItem = () => {
        setItems([...items, {id: items.length, value: Math.floor(Math.random() * 10) + 1}])
    }

    return (
        <div> 
            <h2>useState Hook with Array</h2>
            <button onClick={addItem}>Add item</button>
            <ul>
                { items.map(item => <li key={item.id}>{item.value}</li>)}
            </ul> 
            <hr />           
        </div>
    )
}

export default HooksArray
