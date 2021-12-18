import React, {useState} from 'react'

function Login() {
    const [obj, setObj] = useState({email: '', password: ''})
    const loginUser = (e) => {
        e.preventDefault();
        const {email, password } = obj;
        if (!email || !password) {
            alert('please enter valid details');
            return false;
        }
        // service call
    }
    return (
        <div>
            <form onSubmit={loginUser}>
                <input type="email" className="form-control" placeholder='Enter email address' 
                    value={obj.email} onChange={(e) => setObj({...obj, email: e.target.value})} />
                <input type="password" className="form-control" placeholder='Enter Password' 
                    value={obj.password} onChange={(e) => setObj({...obj, password: e.target.value})} />
                <button type="submit">Submit</button>
            </form>
            <hr />
        </div>
    )
}

export default Login
