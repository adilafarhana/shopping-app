import React, { useState } from 'react'
import NavUser from './NavUser'

const AddUser = () => {
    const [data,changeData]=useState(

        {
           "id":"",
           "firstName":"",
           "lastName":"",
           "maidenName":"",
           "age":"",
           "gender":"",
           "email":"",
           "phone":"",
           "username":"",
           "password":"",
           "birthDate":"",
           "height":"",
           "weight":"",
           "eyeColor":"",
           "hair":"",
          

        }
    )
    const inputHandler =(event)=>{
        changeData({...data,[event.target.name]:event.target.value})
    }
    const readValue =() =>(
        console.log(data)
    )
  return (
    <div>
        <NavUser/>
        <div className="container">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">id</label>
                        <input type="text" className="form-control" name='id' value={data.id} onChange={inputHandler}/>

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                     <label htmlFor="" className="form-label">firstname</label>
                    <input type="text" className="form-control"name='firstName' value={data.firstName} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">lastname</label>
                    <input type="text" className="form-control" name='lastName' value={data.lastName} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">age</label>
                    <input type="text" className="form-control" name='age' value={data.age} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">gender</label>
                    <input type="text" className="form-control" name='gender' value={data.gender} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">maidename</label>
                    <input type="text" className="form-control"name='maidenName' value={data.maidenName} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">gender</label>
                    <input type="text" className="form-control"name='gender' value={data.gender} onChange={inputHandler} />
                   
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">email</label>
                    <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">phone</label>
                    <input type="text" className="form-control"name='phone' value={data.phone} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">username</label>
                    <input type="text" className="form-control"name='username' value={data.username} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">password</label>
                    <input type="text" className="form-control"name='password' value={data.password} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">birthdate</label>
                    <input type="date" className="form-control"name='birthDate' value={data.birthDate} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">height</label>
                    <input type="text" className="form-control"name='height' value={data.height} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">weight</label>
                    <input type="text" className="form-control"name='weight' value={data.weight} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">eyeColor</label>
                    <input type="text" className="form-control"name='eyeColor' value={data.eyeColor} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">hair</label>
                    <input type="text" className="form-control"name='hair' value={data.hair} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <button className="btn btn-success" onClick={readValue}>submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddUser