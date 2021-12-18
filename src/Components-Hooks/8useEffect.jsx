import React, {useState, useEffect} from 'react'

function UseEffectThree() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePositions = (e) => {
        setX(e.clientX);
        setY(e.clientY);
    }

    // useEffect run only once
    useEffect( () => {
        console.log('use Effect called');
        window.addEventListener('mousemove', logMousePositions);

        // cleaup code (unmount )
        return () => { // clearing timers, cancelling subscriptions, removing eventHandlers
            console.log('component unmount code');
            window.removeEventListener('mousemove', logMousePositions);
        }
    }, []) // here empty [] will reduce the renders

    return (
        <div>
            <h4>
                Hooks X - {x}  Y - {y}
            </h4>
            <hr />
            
        </div>
    )
}


function MouseContainer() {
    const [display, setDisplay] = useState(true);
    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle Display</button>
            { display && <UseEffectThree /> }
        </div>
    )
}

export default MouseContainer;