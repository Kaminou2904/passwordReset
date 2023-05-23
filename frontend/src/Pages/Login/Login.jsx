import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {

    const [formdata, setFormdata] = useState({email:'', password:''});
    const {email, password} = formdata;

    const onchangeHandler = (e)=>{
        setFormdata({...formdata, [e.target.name]: e.target.value})
    }

    const submitHnadler = async (e)=>{
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:8989/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formdata)
            });
            const data = await res.json()
            console.log(data);
            if(data.success){
                alert(data.message)
            }else{
                alert(data.message);
                console.log("somethin's fishy here")
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <div className="border rounded p-3 w-25 mx-auto m-2 mt-5">
                <form onSubmit={submitHnadler}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" name='email' value={email} onChange={onchangeHandler} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="text" name='password' value={password} onChange={onchangeHandler} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">reCaptcha</label>
                    </div>
                    <div className="actions w-100 d-flex justify-content-between align-items-center">
                    <button type="submit" className="btn btn-primary">Login</button>
                    <Link to="/reset">forget password?</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login