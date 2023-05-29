import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css'

function Signup() {

    const navigate = useNavigate();

    const [formdata, setFormdata] = useState({name:'', email:'', number: '', dateOfBirth:'', password:''});
    const {name, number, email, dateOfBirth, password} = formdata;

    const onchangeHandler = (e)=>{
        setFormdata({...formdata, [e.target.name]: e.target.value})
    }

    const submitHnadler = async (e)=>{
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:8989/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formdata)
            });
            const data = await res.json()
            console.log(data);
            if(data.success){
                alert(data.message);
                navigate('/')
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
        <div>
            <div className="border rounded p-3 w-25 mx-auto m-2 mt-5">
                <form onSubmit={submitHnadler}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                        <input type="text" name='name' value={name} onChange={onchangeHandler} className="form-control text-capitalize" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Number</label>
                        <input type="tel" name='number' value={number} onChange={onchangeHandler} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" name='email' value={email} onChange={onchangeHandler} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Date Of Birth</label>
                        <input type="date" name='dateOfBirth' value={dateOfBirth} onChange={onchangeHandler} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
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
                    <button type="submit" className="btn btn-primary">Sign up</button>
                    <button className="btn btn-outline-danger"><Link className='nav-link' to='/'>Login</Link></button>
                    <br />
                    <Link to="/reset">forget password?</Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Signup