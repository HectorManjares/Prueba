import React, { useEffect, useState } from 'react';
import { Button, Container, Dropdown, Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Robot from '../assets/image/R1.png'
import '../styles/devices.css'
import { getDevicesThunk } from '../store/slices/Devices.slice';


const Devices = () => {
    
    const modules = useSelector(state => state.modules)
    const [limite, setLimite] = useState(5);
    const [cronometro, setCronometro] = useState(0);
    const [search, setSearch] = useState([""]);
    const navigate = useNavigate();    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();
    const devices = useSelector(state => state.devices)

    const Logout = () => {
        localStorage.setItem("token", "");
        navigate("/");

    }
    const agregar = () => {
        setLimite(limite + 5)
    }

    const runOutCronometro = () => {
        setTimeout(() => {
            setCronometro(cronometro - 100)
        }, 100)
    };

    useEffect(() => {
        if (cronometro > 0) {
            runOutCronometro()
        } else if (cronometro === 0) {
            dispatch(getDevicesThunk(limite, search))
        }
    }, [search, cronometro, limite]);

    useEffect(() => {
        console.log(modules)
    }, [modules])

    const [show, setShow] = useState(false);

    return (
        <div className='Cont2'>
         
        <Container className="All">
            <h1>Devices</h1>

        <div className='Input-Search'>
            <Button className='button2'  onClick={handleShow}>
                Menu
            </Button>
            <a href="https://boisterous-horse-395fe9.netlify.app" target="_blank">
                <Button>Pokemon API Publica</Button>
            </a>
            <div className='InputAll'>
            

            <input type="text"
                value={search.join(" ")}
                onChange={(e) => {
                    setCronometro(1500)
                    setSearch([...e.target.value.split(" ")])
                    setLimite(5)
                }} />
                <Button className='button3'  onClick={agregar}>+</Button>
            </div>
                <Button className='button1' onClick={Logout}>Logout</Button>
        </div>



            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Informacion</Offcanvas.Title >
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Dropdown.Menu show>

                        {modules?.map(module => (
                            <Dropdown.Item key={module.id_module}>
                                {module.module}</Dropdown.Item>
                        ))
                        }

                    </Dropdown.Menu>
                </Offcanvas.Body>
            </Offcanvas>


            <div className='Card-cont'>
                {
                    devices?.map(device => (
                        <div key={device.id_device} className='Card-info' >
                            <div>
                                <img src={Robot} alt="Robot"/>
                            </div>
                            <h4>
                                {device?.device_name}
                            </h4>
                            <p className='info'>
                                <span>
                                    <b>Model: </b>
                                    {device?.device_model}
                                </span>

                                <span>
                                    <b>Serial: </b>
                                    {device?.settings_device?.serial}
                                </span>
                            </p>
                        </div>
                    ))
                }
            </div>
        </Container>
        </div>
    );
};

export default Devices;