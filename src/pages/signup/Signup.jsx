import React from 'react'
import "./style.scss";
import ContentWrapper from '../../components/contentWrapper/ContentWrapper';
import { Stack, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { ImGithub } from 'react-icons/im';
import { FcGoogle } from 'react-icons/fc';
import { BsTwitter } from 'react-icons/bs';
import { inputLabelClasses } from "@mui/material/InputLabel";

const Signup = () => {

    const sxx = () => {
        return {
            // set the color of the label when not shrinked
            color: "red",
            border: 'green',
            [`&.${inputLabelClasses.shrink}`]: {
                // set the color of the label when shrinked (usually when the TextField is focused)
                color: "orange",
            }
        }
    }

    return (
        <>
            <section className="signup">
                <ContentWrapper>
                    <div className="content">
                        <div className="pageTitle">
                            {/* Register Here */}
                        </div>
                    </div>

                    <div className="formDiv">
                        <div className="form">
                            <p className='para1'>Step: 1 of 3</p>
                            <p className="para2">
                                Joining Netflix is easy.
                            </p>
                            <p className="para3">
                                Enter your password and you'll be watching in no time.
                            </p>

                            <form onSubmit={e => e.preventDefault()}>
                                <Stack spacing={3}>
                                    <TextField id="email" type='email' label="Email" variant="filled" InputLabelProps={{ sx: sxx() }} />
                                    <TextField id="password" type='password' label="Password" variant="filled" InputLabelProps={{ sx: sxx() }} />
                                    <TextField id="confirm-password" type='password' label="Confirm Password" variant="filled" InputLabelProps={{ sx: sxx() }} />
                                </Stack>
                                <button>Signup</button>
                            </form>
                            <div className="social-accounts">
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
                            <p className="para4">
                                Already have account?<Link className='loginHere' to={'/login'}>Login Here</Link>
                            </p>

                        </div>
                    </div>
                </ContentWrapper>
            </section >
        </>
    );
}

export default Signup;