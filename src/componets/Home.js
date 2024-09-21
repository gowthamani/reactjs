import React, { useState, useEffect, Component } from "react";
import "../styles.css";
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form";

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { FormControl, FormHelperText } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Input from "@mui/material/Input";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { UseDispatch } from "react-redux";
import { customerSlice, setCustomer, setUser } from "../state-manager/slice"
import { pushUser } from "../state-manager/commondata"
import {z,ZodType} from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import {getUserDetails} from '../state-manager/slice'
import Auth from "./auth";



function Home() {



  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 150,
    height: 50,
    padding: 6,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(0px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(100px)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#fff',
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
      width: 50,
      height: 50,
      '&::before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      borderRadius: 20 / 2,
    },
  }));

  const [slider, setslide] = useState(true)


  const AreaSwap = (event) => {
    debugger
    if (slider) {
      setslide(false)
    } else {
      setslide(true)
    }

  }

  return (
    <div className="login-container">

      <span>
        <FormControlLabel
          control={<MaterialUISwitch sx={{ m: 1 }} onChange={AreaSwap} checked={slider} />}
        />
      </span>

      <Card className="home-card" variant="outlined">
        <CardContent>
          <>
            {slider && <Login />}

            {!slider && <Register />}
          </>
        </CardContent>
      </Card>

      <ToastContainer />
    </div>

  );
}



function Login() {


  const dispatch = useDispatch()
  const cutomer = useSelector((state) => state.common)

  const [state, setState] = useState({
    email: "",
    password: ""
  });

  const [state123, setvalue] = useState(true)

  useEffect(() => {
    console.log("entered")
    return () => {
      console.log("exited")
    }
  }, [state])



  const navigate = useNavigate();


  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let obj = {
      email: state.email,
      password: state.password
    }

    dispatch(getUserDetails("gowtham"))

    debugger
    await axios.post('http://localhost:4000/api/login', {
      body: obj,

    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    ).then((response) => {
      debugger
      const resolveAfter3Sec = new Promise((resolve, reject) => {
        if (response.data.responseType == 'S') {
          resolve()
          dispatch(setUser(response.data.responseBody))
        } else {
          reject()
        }

      });
      toast.promise(
        resolveAfter3Sec,
        {
          pending: 'Fetching',
          success: {

            render() {
              return navigate('dashboard')
            },
          },
          error: 'Wrong Credentials 🤯'
        },
        { theme: "light", position: "bottom-right", closeOnClick: "true" }
      )
    })

  };

  const handleInputChange = (event) => {
    debugger
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value
    }));
  };


  return (
    <div className="login-form">

      <h2>Login to Continue</h2>
      <form onSubmit={handleSubmit}>

        <FormControl className="form-field" fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="login-email">Email</InputLabel>
          <OutlinedInput
            id="login-email"
            endAdornment={<InputAdornment position="start">@</InputAdornment>}
            label="Email"
            onChange={handleInputChange}
            value={state.email}
            name='email'
          />
        </FormControl>

        <FormControl className="form-field" onChange={handleInputChange} fullWidth sx={{ m: 1 }} variant="outlined" value={state.password}>
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            onChange={handleInputChange}
            value={state.password}
            name='password'
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        <div className="login-button">
          <Button variant="contained" type="submit">Login</Button>
        </div>
      </form>
    </div>
  )
}


function Register() {
    // resolver:zodResolver(schema)
  const schema = z.object({
    name:z.string(),
    password:z.string(),
    conpassword:z.string(),
    email:z.string({
      required_error:"it must be string"
    }).email({
      message:"email"
    }),
    phno:z.string()
  })
  const { register,handleSubmit,setError,formState:{errors} } = useForm({
    defaultValues:{
      email:"gowthammani@azentio.com"
    }
  })


  const registersubmit = async (event) => {
    debugger

   console.log(event)

    let obj = {
      name: event.name,
      mobile: event.phno,
      dob: event.phno,
      email: event.email,
      password: event.password,
      confirmpassword: event.conpassword
    }

    debugger
    await axios.post('http://localhost:4000/api/register', {
      body: obj,

    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    ).then((data) => {
      if (data.responseType == "S") {
        toast.success(data.responseBody, {
          position: "botttom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      } else {
        toast.error(data.responseBody, {
          position: "botttom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      }
    })

  }

  return (

    <div className="register-form">

      <h2>Register to Continue</h2>
    <form onSubmit={handleSubmit(registersubmit)}>
    <FormControl className="form-field" fullWidth sx={{ m: 1 }} variant="outlined">
          <InputLabel htmlFor="my-input">Name</InputLabel>
          <Input {...register("name",{
            required:{
              value:true,
            message:"mandatory"
          },
            minLength:{
              value:8,
              message:"name must have 8 letters"
            },
            validate: (value) => {
               if(value.includes('G')){
                return "name must have G"
              }
              return true
            },
          })} id="my-input" aria-describedby="my-helper-text" />
          {errors.name && <div>{errors.name.message}</div>}
        </FormControl>


        <FormControl className="form-field" fullWidth sx={{ m: 1 }} variant="outlined">
          <InputLabel htmlFor="my-input" type="email">Email address</InputLabel>
          <Input {...register("email")} id="my-input" aria-describedby="my-helper-text" />
          {errors.email && <div>{errors.email.message}</div>}
        </FormControl>

        <FormControl className="form-field" fullWidth sx={{ m: 1 }} variant="outlined">
          <InputLabel htmlFor="my-input" type="password">Password</InputLabel>
          <Input {...register("password",{required:true})} id="my-input" aria-describedby="my-helper-text" />
        </FormControl>

        <FormControl className="form-field" fullWidth sx={{ m: 1 }} variant="outlined">
          <InputLabel htmlFor="my-input" type="password">Conform Password</InputLabel>
          <Input {...register("conpassword",{required:true})} id="my-input" aria-describedby="my-helper-text" />
        </FormControl>

        <FormControl className="form-field" fullWidth sx={{ m: 1 }} variant="outlined">
          <InputLabel htmlFor="my-input">Ph No.</InputLabel>
          <Input {...register("phno",{required:true})} id="my-input" aria-describedby="my-helper-text" />
        </FormControl>
        <div className="login-button">
          <Button variant="contained" type="submit">Register</Button>
        </div>
    </form>
    </div>
  )
}

export default Auth(Home);







