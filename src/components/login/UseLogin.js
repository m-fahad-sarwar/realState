import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser, signUpUser } from '../../store/AuthSlice'

export default function UseLogin() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    
    const [password, setPassword] = useState('')
    const [signUpScreen, setSignUpScreen] = useState(false)
    const Dispatch = useDispatch()

    const loginHandeler =()=>{
        let data = {
            email,
            password
        }
        Dispatch(loginUser(data))
    }
  const  signUpHandeler =()=>{
    let data ={
        firstName,
        lastName,
        phone,
        email,
        password
    }
    console.log(data);
Dispatch(signUpUser(data))
  }
  return {
    loginHandeler,
    email,
    setEmail,
    password,
    setPassword,
    setSignUpScreen,
    signUpScreen,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    phone,
    setPhone,
    signUpHandeler
  }
}
