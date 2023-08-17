import React, { useEffect, useState } from 'react'
import './style.scss';
import ContentWrapper from '../../components/contentWrapper/ContentWrapper';
import { Avatar, Input } from '@mui/material';
import { useSelector } from 'react-redux';
import avatar from '../../assets/avatar.png';
import Img from '../../components/lazyLoadImage/Img';

const Profile = () => {
    const [userImg, setUserImg] = useState(avatar);

    // const [userData, setUserData] = useState([]);
    // const [isNewtonUser, setIsNewtonUser] = useState(false);

    // const user = useSelector((state) => {
    //     let data = '';
    // if (state.user.userDetails.data) {
    //     // setIsNewtonUser(true);
    //     data = state.user.userDetails.data;
    //     if (data) {
    //         setIsNewtonUser(true);
    //     }

    // }
    // if (state.user.userDetails.user) {
    //     // setIsNewtonUser(false);
    //     data = state.user.userDetails.user;
    //     if (data) {
    //         setIsNewtonUser(true);
    //     }
    // } else {
    //     setIsNewtonUser(false);
    //     return false;
    // }
    //     return data;
    // })

    // useEffect(() => {
    //     setUserData(user);
    // }, []);

    // console.log(user);
    // console.log(userData);

    return (
        <ContentWrapper>
            <div className='_main_'>
                <div>
                    <h1 className='pageTitle'>
                        {/* My Profile {isNewtonUser ? '(Newton User).' : '(Firebase User)'} */}
                    </h1>
                </div>
                <div className="profile_headers">

                    <div className="left">
                        <h3>Photo</h3>
                        {/* <div className="userPhoto">
                            <img src={userImg} alt="User Avatar" />
                        </div> */}
                    </div>
                    <div className="middle">
                        <h3> User Settings</h3>
                        <img src="" alt="" />
                    </div>
                    <div className="right">
                        <h3>Update password</h3>
                    </div>
                </div>
                <div className="profile_content">
                    <div >
                        <Img className='userPhoto'
                            alt="User Avatar"
                            src={userImg}
                        />
                    </div>
                    <Input type='file' className='inputBtn' onChange={(e) => { setUserImg(e.target.value) }} />
                </div>

                {/* <h1>Working on this Page</h1> */}
            </div>
        </ContentWrapper>
    )
}

export default Profile;