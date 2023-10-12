import axios from "axios";
import { useEffect } from "react";


// useEffect (()=>{
// },[])
let jwtToken = localStorage.getItem('Token')

console.log(jwtToken)
// conso
const authheader = `Bearer ${jwtToken}`;
const headers = {
  'Authorization': authheader,
  'Content-Type': 'application/json',
};

//appserver endpoint
// const URI = 'http://15.207.14.101:8080'
const URI = 'http://localhost:8181'

//endpoint 1
axios.get(`${URI}`)
const getDoctor = () => axios.get(`${URI}/doctor/get`)
const getDoctorbyId = (id) => axios.get(`${URI}/doctor/find/${id}`, { headers })
const addDoctor = (doctor) => axios.post(`${URI}/doctor/add`, doctor, { headers })
const editDoctor = (id, doctor) => axios.put(`${URI}/doctor/edit/${id}`, doctor, { headers })
const deleteDoctor = (id) => axios.delete(`${URI}/doctor/delete/${id}`, { headers })

const getUser = () => axios.get(`${URI}/user/get`, { headers })
const getUserbyId = (id) => axios.get(`${URI}/user/find/${id}`, { headers })
const editUser = (id, docto) => axios.put(`${URI}/user/edit/${id}`, doctor, { headers })
const deleteUser = (id) => axios.delete(`${URI}/user/delete/${id}`, { headers })

const userLogin = (signin) => axios.post(`${URI}/auth/login`, signin)
const userRegister = (register) => axios.post(`${URI}/auth/register`, register)
// const adminLogin = (signin) => axios.post(`${URI}/auth/login`, signin)

const addPatient=(patient)=> axios.post(`${URI}/patient/add`,patient,{headers})
const getUserPatients = (id) =>axios.get(`${URI}/patient/get/${id}`,{headers})

// -> dashboard
const getUserCount = () => axios.get(`${URI}/user/getCount`, { headers })
const getDoctorCount = () => axios.get(`${URI}/doctor/getCount`, { headers })
const getPatientCount = ()=> axios.get(`${URI}/patient/getCount`, { headers })

//endpoint 2
const getFeedback = () => axios.get(`${URI}/feedback/get`, { headers })
const deleteFeedback = (id) => axios.delete(`${URI}/feedback/delete/${id}`, { headers })

const getFeedbacktCount = () => axios.get(`${URI}/feedback/getcount`, { headers })
const addFeedback = (feedback) => axios.post(`${URI}/feedback/add`, feedback)

export { getDoctor, getDoctorbyId, addDoctor, editDoctor, deleteDoctor, getDoctorCount, getFeedback, addFeedback, deleteFeedback, getFeedbacktCount, getUser, getUserbyId, editUser, deleteUser, getUserCount, userLogin,userRegister,addPatient,getUserPatients,getPatientCount }