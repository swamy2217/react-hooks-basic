import React, { useState } from 'react';


function Todo() {
    const [val, setVal] = useState('');
    const [names, setNames] = useState([]);
    const addName = (e) => {
        e.preventDefault();
        if (val) {
            const newItem = {
                id: Date.now(),
                name: val
            }
            setNames([
                ...names,
                newItem
            ]);
            setVal('');
        }
    }
    return (
        <form onSubmit={addName}>
            <h2>Todo List with useState Hook</h2>
            <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
            <button type="submit">save</button>
            <div>
                <ul>
                    {
                        names.map(n => <li key={n.id}>{n.name}</li>)
                    }
                </ul>
            </div>
            <hr />
        </form>
    )
}

export default Todo;