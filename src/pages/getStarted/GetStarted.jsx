import { Input } from '@mui/material'
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'
import './style.scss'
import React from 'react'

const GetStarted = () => {

    return (
        <>
            <img src="./main-bg.jpg" alt="" className="img" />
            <ContentWrapper>
                <section id="get-started">
                    <div className="get-started-main">
                        <h1>Unlimited movies, TV shows and more</h1>
                        <h3>Watch anywhere. Cancel anytime.</h3>
                        <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
                    </div>
                    <div className="input">
                        <Input type='email' />
                    </div>
                </section>

            </ContentWrapper>
        </>
    )
}

export default GetStarted