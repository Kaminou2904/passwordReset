import React, {useState} from 'react';

function Reset() {

  const [formdata, setFormdata] = useState({newpassword:'', number:''});
    const { newpassword, number } = formdata;
    const conpass = document.getElementById('conPass');
    const newpass = document.getElementById('newPass');

    const onchangeHandler = (e)=>{
        setFormdata({...formdata, [e.target.name]: e.target.value})
    }

    const submitHnadler = async (e)=>{
        e.preventDefault();
        if(conpass.value === newpass.value){
          try {
            const res = await fetch('http://localhost:8989/reset', {
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
        }else{
          alert('confirm password should have the same value as the new password')
        }
    }

  return (
    <div>
       <div className="border rounded p-3 w-25 mx-auto m-2 mt-5">
                <form onSubmit={submitHnadler}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Mobile number</label>
                        <input type="tel" name='number' value={number} onChange={onchangeHandler} className="form-control"  aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">New password</label>
                        <input type="text" id='newPass' name='newpassword' value={newpassword} onChange={onchangeHandler}  className="form-control"  />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Confirm password</label>
                        <input type="text" id='conPass' className="form-control" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">reCaptcha</label>
                    </div>
                    <div className="actions w-100 d-flex justify-content-between align-items-center">
                      <button type="submit" className="btn btn-primary">Reset password</button>
                    </div>
                </form>
            </div>
    </div>
  )
}

export default Reset