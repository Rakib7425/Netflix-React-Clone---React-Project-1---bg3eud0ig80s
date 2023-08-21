import React, { useEffect, useState } from 'react'
import './style.scss';
import Img from '../../../components/lazyLoadImage/Img';
import { Button, Stack, TextField, inputLabelClasses } from '@mui/material';
import avatar from '../../../assets/avatar.png';
import { MdUploadFile } from 'react-icons/md'
import { TbSend } from 'react-icons/tb'
import { RiLockPasswordLine } from 'react-icons/ri'
import axios from "axios";
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../../../store/userSlice';


import { getAuth, updateProfile } from "firebase/auth";



const FirebaseUser = ({ userData }) => {

    const [userImg, setUserImg] = useState(userData?.photoURL);
    const [userName, setUserName] = useState(userData?.displayName);
    const [email, setEmail] = useState(userData?.email);

    const auth = getAuth();
    console.log(auth);
    const user = auth.currentUser;

    useEffect(() => {
        setUserImg(userData?.photoURL);
        setUserName(userData?.displayName)
        setEmail(userData?.email)

    }, [userData]);

    const handleFileSet = (e) => {
        // setUserImg(e.target.files[0]);
        setUserImg(URL.createObjectURL(e.target.files[0]));
    };

    const sxx = () => {
        return {
            // set the color of the label when not shrinked
            color: "red",
            [`&.${inputLabelClasses.shrink}`]: {
                // (usually when the TextField is focused)
                color: "orange",
            }
        }
    }
    const updateProfileImage = () => {
        updateProfile(user, {
            photoURL: userImg
        }).then(() => {
            // Profile updated!
            toast.success('Profile image updated!');
            console.log("Profile updated!");
        }).catch((error) => {

            toast.error('Some error occurred!');
            console.error("Some error occurred!");
            // An error occurred
            // ...
        });
    }
    const updateProfileData = () => {
        updateProfile(user, {
            displayName: name,
            email: email,
        }).then(() => {
            // Profile updated!
            toast.success('Profile updated!');

            console.log("Profile updated!");
        }).catch((error) => {
            // An error occurred
            toast.error('Some error occurred!');
            console.error("Some error occurred!");
        });
    }

    return (
        <>
            <div className="profile_headerss">

                <div className="leftt">
                    <h3>Photo</h3>
                    <div className="photoContentt">
                        <div >
                            <Img className='userPhoto'
                                id='output'
                                alt="User Avatar"
                                src={userImg}
                            />
                        </div>

                        <div className='inputButtons'>
                            <Button
                                component="label"
                                variant="outlined"
                                startIcon={<MdUploadFile />}
                                sx={{ marginRight: "1rem" }}
                                className='inputBtn'
                            >
                                Select Image
                                <input type="file" accept=".jpeg, .jpg, .png, .ico" hidden onChange={(e) => { handleFileSet(e) }} />

                            </Button>
                            <Button variant="contained" className='subButton' endIcon={<TbSend />} onClick={updateProfileImage}>update</Button>
                        </div>
                    </div>
                </div>
                <div className="middle">
                    <h3> User Settings</h3>
                    <div className="userSettings">
                        <Stack spacing={4} width={300}>
                            <TextField id="namee" type='text' label="Name" variant="filled"
                                value={userName}
                                disabled
                                onChange={(e) => setUserName(e.target.value)}
                                InputLabelProps={{ sx: sxx() }}
                            />
                            <TextField id="emaill" type='email' label="Email" variant="filled"
                                value={email}
                                disabled
                                onChange={(e) => setEmail(e.target.value)}
                                InputLabelProps={{ sx: sxx() }}
                            />
                            <Button variant="contained" disabled className='subButton' endIcon={<TbSend />} onClick={updateProfileData}>update profile</Button>
                        </Stack>
                    </div>
                </div>

                {/* <div className="right">
                    <h3>Update password</h3>
                </div> */}

                <div className="note">
                    <h3>Note: After update profile 'Relogin' required for reflect in the page.(Logout & Login again). </h3>
                </div>
            </div>



        </>
    )
}

export default FirebaseUser;