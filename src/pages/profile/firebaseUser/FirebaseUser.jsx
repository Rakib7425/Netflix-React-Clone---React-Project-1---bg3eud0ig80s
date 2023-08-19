import React, { useState } from 'react'
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

const FirebaseUser = ({ userData }) => {

    const [userImg, setUserImg] = useState(userData?.photoURL);
    const [userName, setUserName] = useState(userData?.displayName);
    const [email, setEmail] = useState('');


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
    console.log(userData);

    return (
        <>
            <div className="profile_headers">

                <div className="left">
                    <h3>Photo</h3>
                    <div className="photoContent">
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
                            <Button variant="contained" className='subButton' endIcon={<TbSend />} >update</Button>
                        </div>
                    </div>
                </div>
                <div className="middle">
                    <h3> User Settings</h3>
                    <div className="userSettings">
                        <TextField id="uname" type='text' label="Name" variant="filled"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            InputLabelProps={{ sx: sxx() }}
                        />
                    </div>
                </div>
                <div className="right">
                    <h3>Update password</h3>
                </div>
            </div>
            <div className="profile_content">


            </div>
        </>
    )
}

export default FirebaseUser;