import React, { useState } from 'react'

function HookObject() {
    const [name, setName] = useState({firstName:'', lastName: ''});
    return (
        <form>
            <h2>useState Hook with Object</h2>
            <h6> Hello {name.firstName} {name.lastName}</h6>
            <input className="form-control" value={name.firstName}
                onChange={(e) => setName({...name, firstName: e.target.value}) } />
            <input className="form-control" value={name.lastName} 
            onChange={(e) => setName({...name, lastName: e.target.value}) }/>            
            <hr />
        </form>
    )
}

export default HookObject
