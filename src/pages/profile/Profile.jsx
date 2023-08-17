import React from 'react'
import './style.scss';
import ContentWrapper from '../../components/contentWrapper/ContentWrapper';

const Profile = () => {
    return (
        <ContentWrapper>
            <div className='_main_'>
                <h1 className='pageTitle'>
                    My Profile
                </h1>
                <div className="left"></div>
                <div className="middle"></div>
                <div className="right"></div>
                <h1>Working on this Page</h1>
            </div>
        </ContentWrapper>
    )
}

export default Profile