import React, { useState } from 'react'
import './style.scss';
import Img from '../../../components/lazyLoadImage/Img';
import avatar from '../../../assets/avatar.png';
import { Button } from '@mui/material';
import { MdUploadFile } from 'react-icons/md'
const FirebaseUser = () => {

    const [userImg, setUserImg] = useState(avatar);
    return (
        <>
            <div className="profile_headers">

                <div className="left">
                    <h3>Photo</h3>
                    <div className="photoContent">
                        <div>

                            <div >
                                <Img className='userPhoto'
                                    id='output'
                                    alt="User Avatar"
                                    src={userImg}
                                />
                            </div>

                            <div>
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
                            </div>
                        </div>
                    </div>
                </div>
                <div className="middle">
                    <h3> User Settings</h3>
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