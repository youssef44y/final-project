import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./style.css"
import { useForm } from 'react-hook-form';
import { signup } from '../redux/slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom';



const Register = () => {
  const {isAuth, errors: err} =  useSelector(state => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {console.log(data);
  dispatch ( signup(data))
}
  console.log(errors);

  useEffect(() =>{
    if(isAuth) {navigate("/home")}
  },[isAuth])

  return (
    <Form className='form' onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder="Enter name" 
        {...register("name", { required: true })}/>
        <p className='error'>{errors.name && "this field is required"}</p>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" 
      {...register("email", {required: true, pattern: /^\S+@\S+$/i})}/>
      <p className='error'>{errors.email && "this email is invalid"}</p>
      <p className='error'>{err && "Email exist,please try to login"}</p>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" 
       {...register("password", { required: true })}/>
        <p className='error'>{errors.password && "this password should at least 6 characters and contains 1 number, 1 uppercase, 1 lowercase and 1 symbol"}</p>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="submit">
        Submit
      </Button>
  </Form>
  )
}

export default Register