import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import '../styles/login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { addModules } from '../store/slices/modules.slice';
import { useDispatch } from 'react-redux';
import bg from "../assets/video/bgLogin.mp4"

const Login = () => {

    const dispatch = useDispatch()

    const{ register ,handleSubmit } = useForm();

    const navigate = useNavigate();

    const submit = (data) => {
        axios.post('https://api.dev.myintelli.net/v1/login',data)
            .then(res => {
                    dispatch(addModules(res.data.modules));
                    localStorage.setItem("token", res.data.token);
                    navigate("welcome");
                    console.log(res.data)
            })
            .catch(error => {
                if(error.response?.status === 401){
                    alert("Credenciales invalidas")
                }
                console.log(error.response)
            });
    }
    

    return (
        <div className='Cont'>
            <video autoPlay loop muted src={bg} className='vidLogin'></video>
            <div className='Login-all'>
                <div className='loginForm'>
                    <h1>Login</h1>
                        <div className='loginCont'>
                            <span>
                                <b>Usuario de Prueba:</b>
                                <br />robert@mail.com
                            </span>
                            <span>
                                <b>Contraceña:</b>
                                <br />123456
                            </span>
                        </div>

                        <Form onSubmit={handleSubmit(submit)}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control {...register("email")}type="email" placeholder="Enter email" />
                                    We'll never share your email with anyone else.
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control {...register("password")}type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                </div>
            </div>
        </div>
    );
};

export default Login;