import React from 'react'
import './style.scss'
import { FcGoogle } from 'react-icons/fc';
import { ImGithub } from 'react-icons/im';
import { BsTwitter } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import FAQ from '../../components/FAQ/FAQ';
// import ContentWrapper from '../../components/contentWrapper/ContentWrapper';
import { useState } from 'react';
import axios from "axios";
import { Stack, TextField } from '@mui/material';
import { inputLabelClasses } from "@mui/material/InputLabel";

const Login = () => {
    const projectId = import.meta.env.VITE_APP_PROJECT_ID;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState([]);
    let headersList = {
        "projectId": projectId,
        "Content-Type": "application/json"
    }

    let bodyContent = JSON.stringify({
        "email": email,
        "password": password
    });

    let reqOptions = {
        url: "https://academics.newtonschool.co/api/v1/user/login",
        method: "POST",
        headers: headersList,
        data: bodyContent,
    }

    const login = async () => {
        let response = await axios.request(reqOptions);
        if (response) {
            console.log(response.data);
            setUser(response);
        }

    }
    const handleSignIn = () => {
        login();
    }

    const sxx = () => {
        return {
            // set the color of the label when not shrinked
            color: "red",
            [`&.${inputLabelClasses.shrink}`]: {
                // set the color of the label when shrinked (usually when the TextField is focused)
                color: "orange",
            }
        }
    }
    return (
        <>
            <section className='login-main'>
                {/* <ContentWrapper>
                    <h1>Welcome to Netflix</h1>
                </ContentWrapper> */}
                <div className="bg-img">
                    <img src={'./login-bg.jpg'} alt="" />
                </div>
                <div className="form-wrapper">
                    <h2>Sign In</h2>
                    <form onSubmit={(e) => { e.preventDefault() }}>
                        <div className="form-control">
                            <Stack spacing={3}>
                                <TextField id="email" type='email' label="Email" variant="filled"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    InputLabelProps={{ sx: sxx() }}
                                />
                                <TextField id="password" type='password' label="Password" variant="filled"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    InputLabelProps={{ sx: sxx() }}
                                />
                            </Stack>
                            {/* <input type="email" required
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <label>Email or phone number</label> */}
                        </div>
                        <div className="form-control">
                            {/* <input type="password" required
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                            <label>Password</label> */}
                        </div>
                        <button type="submit" onClick={handleSignIn}>Sign In</button>
                        <div className="form-help">
                            <div className="remember-me">
                                <input type="checkbox" defaultChecked id="remember-me"
                                // onChange={e=>setChecked(e.target.value)}
                                />
                                <label htmlFor="remember-me">Remember me</label>
                            </div>
                            <Link>Need help?</Link>
                        </div>
                    </form>
                    <div className="social-accounts m">
                        <div id="google">
                            <FcGoogle size={35} />
                        </div>

                        <div id="github">
                            <ImGithub color='white' size={35} />
                        </div>

                        <div id="twitter">
                            <BsTwitter size={35} />
                        </div>
                    </div>
                    <p className='new'>New to Netflix? <Link className='go-signup' to={'/signup'}>Sign up now</Link></p>
                    {/* <small>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot.
                        <a href="#">Learn more.</a>
                    </small> */}
                </div>
            </section>


            <div className='faq'>
                <FAQ />
            </div>
        </>
    )
}

export default Login;