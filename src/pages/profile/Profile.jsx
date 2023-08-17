import React, { useEffect, useState } from 'react'
import './style.scss';
import ContentWrapper from '../../components/contentWrapper/ContentWrapper';
import { Avatar, Button, Input } from '@mui/material';
import { useSelector } from 'react-redux';

import avatar from '../../assets/avatar.png';
import Img from '../../components/lazyLoadImage/Img';
import { MdUploadFile } from 'react-icons/md'

const Profile = () => {
    const [userImg, setUserImg] = useState(avatar);

    const [userData, setUserData] = useState({});
    const [isNewtonUser, setIsNewtonUser] = useState(false);

    const newtonUser = useSelector((state) => state?.user?.userDetails?.data);
    const firebaseUser = useSelector((state) => state?.user?.userDetails?.user);


    useEffect(() => {
        if (newtonUser) {
            setIsNewtonUser(true);
            setUserData(newtonUser);
        } else {
            setIsNewtonUser(false);
            setUserData(firebaseUser);
        }
    }, [userData]);

    // console.log(newtonUser);
    // console.log(firebaseUser?.displayName);
    console.log(userData);

    // console.log(user);
    // console.log(userData);



    const handleFileUpload = (e) => {
        if (!e.target.files) {
            return;
        }
        const file = e.target.files[0];
        const { name, type } = file;

        // Check the file type
        if (type.includes('jpg') || type.includes('jpeg') || type.includes('png')) {
            setUserImg(file);
            // For demonstration purposes, logging the file name for image files
            console.log("Image file selected:", name, userImg);
        } else {
            // Unsupported file type
            console.error('Unsupported file type');
        }
    };

    const handleFileSet = (e) => {
        // setUserImg(e.target.files[0]);
        setUserImg(e.target.value.split("\\"));
    }


    return (
        <ContentWrapper>
            <div className='_main_'>
                <div>
                    <h1 className='pageTitle'>
                        My Profile {isNewtonUser ? '(Newton User).' : '(Firebase User)'}
                    </h1>
                </div>
                <div className="profile_headers">

                    <div className="left">
                        <h3>Photo</h3>

                    </div>
                    <div className="middle">
                        <h3> User Settings</h3>

                    </div>
                    <div className="right">
                        <h3>Update password</h3>
                    </div>
                </div>
                <div className="profile_content">
                    <div>

                        <div >
                            <Img className='userPhoto'
                                alt="User Avatar"
                                src={userImg}
                            // value={userImg}
                            />
                        </div>

                        <div>
                            <Input type='file' className='inputBtn' onChange={(e) => { handleFileSet(e) }} />
                        </div>

                        <div>
                            <Button
                                component="label"
                                variant="outlined"
                                startIcon={<MdUploadFile />}
                                sx={{ marginRight: "1rem" }}
                            >
                                Select Image
                                <input type="file" accept=".jpeg, .jpg, .png, .ico" hidden onChange={(e) => { handleFileUpload(e) }} />
                            </Button>
                        </div>
                    </div>

                    <div className="userSettings">
                        {/* Profile Settings */}
                    </div>

                    <div className="userPasswords">
                        {/* Profile Settings */}
                    </div>

                </div>


                {/* <h1>Working on this Page</h1> */}
            </div>
        </ContentWrapper>
    )
}

export default Profile;