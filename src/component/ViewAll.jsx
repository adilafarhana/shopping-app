import React, { useEffect, useState } from 'react'
import NavUser from './NavUser'
import axios from 'axios'

const ViewAll = () => {
    const [data, changeData] = useState({"users":[]})
    const fetchData = () =>{
        console.log("hello")
        axios.get("https://dummyjson.com/users").then(
            (response)=>{
                changeData(response.data)
            }

        ).catch().finally()
           
 }
    useEffect(()=> {fetchData()},[])
return (
        <div>
            <NavUser/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">id</th>
                                    <th scope="col">fistname</th>
                                    <th scope="col">age</th>
                                    <th scope="col">gender</th>
                                </tr>
                            </thead>
                            <tbody>
                            {data.users.map(
                                (value, index) => {
                                    return <tr>
                                        <th>{value.id}</th>
                                        <td>{value.first}</td>
                                        <td>{value.age}</td>
                                        <td>{value.gender}</td>
                                    </tr>
                                }
                            )
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll