import React, {useState, useEffect} from 'react'
import {Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService'

const AddEmployeeComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailId, setEmailId] = useState('')
    const navigate = useNavigate();
    const {id} = useParams();

    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();

        const employee = {firstName, lastName, emailId}
        console.log(employee);

        if(id){
            EmployeeService.updateEmployee(id, employee).then((response) => {
                
                navigate('/employees');
            }).catch(error => {
                console.log(error)
            })

        }else{
            EmployeeService.createEmployee(employee).then((response) =>{

                console.log(response.data)
    
                navigate('/employees');
    
            }).catch(error => {
                console.log(error)
            })
        }
        
    }

    useEffect(() => {

        EmployeeService.getEmployeeById(id).then((response) =>{
            setFirstName(response.data.firstName)
            setLastName(response.data.lastName)
            setEmailId(response.data.emailId)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if(id){
            return <h2 className = "text-center">Update Employee</h2>
        }else{
            return <h2 className = "text-center">Add Employee</h2>
        }
    }

    return (
        <div>
           <br /><br />
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       {
                           title()
                       }
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> First Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter first name"
                                        name = "firstName"
                                        className = "form-control"
                                        value = {firstName}
                                        onChange = {(e) => setFirstName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Last Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter last name"
                                        name = "lastName"
                                        className = "form-control"
                                        value = {lastName}
                                        onChange = {(e) => setLastName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Email Id :</label>
                                    <input
                                        type = "email"
                                        placeholder = "Enter email Id"
                                        name = "emailId"
                                        className = "form-control"
                                        value = {emailId}
                                        onChange = {(e) => setEmailId(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateEmployee(e)} >Submit </button>
                                <Link to="/employees" className="btn btn-danger"> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default AddEmployeeComponent




















// import React ,{useState} from 'react';

// import EmployeeService from '../services/EmployeeService';
// import { Link, useNavigate,useParams } from 'react-router-dom';
// import { useEffect } from 'react';


// const AddEmployeeComponent = () => {

//     const [firstName, setFirstName ] = useState('')
//     const [lastName, setLastName ] = useState('')
//     const [emailId, setemailId] = useState('')
//     const navigate = useNavigate()
//     const {id} =useParams();

//     const saveOrUpdateEmployee = (e) => {
//         e.preventDefault();

//         const employee ={firstName,lastName,emailId} 

//         if(id){
//             EmployeeService.updateEmployeeById(id,employee).then((response) => {
//                 navigate('/employees');
//             }).catch(error => {
//                 console.log(error);
//             })

//         }else{
//             EmployeeService.createEmployee(employee).then((response) =>{

//                 console.log(response.data)

                
//                 navigate('/employees')

//             }).catch(error => {
//                 console.log(error)

//             })

//         }

            
//     }

//         useEffect(() => {

//             EmployeeService.getEmployeeById(id).then((response) =>{
//                setFirstName(response.data.firstName)
//                setLastName(response.data.lastName)
//                setemailId(response.data.emailId)
//             }).catch(error => {
//                 console.log(error)
//             })
//         },[])
    
//     const     title = () =>{
//             if(id){
//                 return <h2 className='text-center'>Update Employee</h2>
//             }else{
//                 return <h2 className='text-center'>Add Employee</h2>
//             }
//         }
//   return (
//     <div>
//         <br /><br />
//         <div className="contaoiner">
//             <div className='row'>
//                 <div className='card col-md-6 offset-md-3 offset-md-3'>
//                    {
//                     title()
//                    }
//                     <div className=' card-body'>
//                         <form>

//                             <div className="form-group mb-2">
//                                 <label className="form-lable"> First Name :</label>
//                                 <input 
//                                   type="text"
//                                   placeholder="Enter first Name"
//                                   name="firstName"
//                                   className="form-control"
//                                   value={firstName}
//                                   onChange = {(e) => setFirstName(e.target.value)}
//                                   >
//                                   </input>
//                             </div>

//                             <div className="form-group mb-2">
//                                 <label className="form-lable"> Last Name :</label>
//                                 <input 
//                                   type="text"
//                                   placeholder="Enter last Name"
//                                   name="lastName"
//                                   className="form-control"
//                                   value={lastName}
//                                   onChange = {(e) => setLastName(e.target.value)}
//                                   >
//                                   </input>
//                             </div>

//                             <div className="form-group mb-2">
//                                 <label className="form-lable">Email Id :</label>
//                                 <input 
//                                   type="text"
//                                   placeholder="Enter email Id"
//                                   name="emailId"
//                                   className="form-control"
//                                   value={emailId}
//                                   onChange = {(e) => setemailId(e.target.value)}
//                                   >
//                                   </input>
//                             </div>
//                             <button className='btn btn-success' onClick={(e) => saveOrUpdateEmployee(e)} > Submit </button>
//                             <Link to="/employees" className='btn btn-danger'> Cancel</Link>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default AddEmployeeComponent;