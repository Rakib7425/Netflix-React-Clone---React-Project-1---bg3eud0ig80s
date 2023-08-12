import React from 'react'
import './style.scss'
import { FcGoogle } from 'react-icons/fc';
import { ImGithub } from 'react-icons/im';
import { BsTwitter } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import FAQ from '../../components/FAQ/FAQ';

const Login = () => {
    return (
        <>
            <section className='login-main'>
                <div>
                    <h1>Welcome to Netflix</h1>
                </div>
                <div className="bg-img">
                    <img src={'./login-bg.jpg'} alt="" />
                </div>
                <div class="form-wrapper">
                    <h2>Sign In</h2>
                    <form onSubmit={(e) => { e.preventDefault() }}>
                        <div class="form-control">
                            <input type="email" required />
                            <label>Email or phone number</label>
                        </div>
                        <div class="form-control">
                            <input type="password" required />
                            <label>Password</label>
                        </div>
                        <button type="submit">Sign In</button>
                        <div class="form-help">
                            <div class="remember-me">
                                <input type="checkbox" defaultChecked id="remember-me" />
                                <label htmlFor="remember-me">Remember me</label>
                            </div>
                            <a href="#">Need help?</a>
                        </div>
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
                    <p>New to Netflix? <Link to={'signup'}>Sign up now</Link></p>
                    <small>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot.
                        <a href="#">Learn more.</a>
                    </small>
                </div>
            </section>

            {/* <ContentWrapper> */}
            <div className='faq'>
                <FAQ />
            </div>
            {/* </ContentWrapper> */}
        </>
    )
}

export default Login;