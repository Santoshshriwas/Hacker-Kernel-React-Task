

import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../CSS/Login.Page.css"

const Login = () => {
let navigate= useNavigate()

  const [form, setForm] = React.useState({
    email: "",
    password: ""
    })
    const values = (e) => {
      const { name, value } = e.target
      setForm({ ...form, [name]: value })
      }
        const LoginSubmit=async (e)=>{
    e.preventDefault();
    try {
      await axios.post("https://reqres.in/api/login",form).then(res=>{
        console.log(res.data);
        localStorage.setItem("token",res.data.token);
        navigate("/home");
       
      })
    } catch (error) {
      console.log(error);
      alert(error.response.data.error);  
    }
  }
  return (
    <div>
      <form className='form'  onSubmit={LoginSubmit}>
        <h1>Login</h1>
       
        <input className='data' required type="email" name="email" onChange={values} value={form.email}  placeholder='Enter Email Id'/>
        <br/>
        
        <input className='data'  required type="password"  name="password" onChange={values} value={form.password} placeholder='Enter a Password'/>
        <br/>
        <button className='btn' type="submit">Login</button>
        
        
      </form>
    </div>
  )
}

export default Login




