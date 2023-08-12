import { Input } from '@mui/material'
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'
import './style.scss'
import React from 'react'

const GetStarted = () => {

    return (
        <>
            {/* <img src="./main-bg.jpg" alt="" className="img" /> */}
            <section id="get-started">
                <ContentWrapper>
                    <div className="get-started-main">
                        <p className='p1'>Unlimited movies, TV shows and more</p>
                        <p className='p2'>Watch anywhere. Cancel anytime.</p>
                        <p className='p3'>Ready to watch? Enter your email to create or restart your membership.</p>
                    </div>
                    <form className="form" onSubmit={(e) => e.preventDefault()}>
                        <div className="mailInput">
                            <input
                                className='input'
                                required
                                type="email"
                                placeholder="Enter your Email...."
                            />
                            <button>Get Started</button>
                        </div>
                    </form>

                </ContentWrapper>
            </section>
        </>
    )
}

export default GetStarted