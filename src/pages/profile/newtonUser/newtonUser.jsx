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



const NewtonUser = ({ userData }) => {

  const [userImg, setUserImg] = useState(avatar);
  const [name, setName] = useState(userData?.data?.name);
  const [email, setEmail] = useState(userData?.data?.email);
  const [currPassword, setCurrPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [conNewPassword, setConNewPassword] = useState('');

  const projectId = import.meta.env.VITE_APP_PROJECT_ID;
  const token = 'Bearer ' + userData.token;


  // const userToken = useSelector((state) => state?.user?.userDetails?.data?.token)
  // const dispatch = useDispatch();

  // console.log(user);
  // useEffect(() => {
  //   // set user details
  //   dispatch(getUser(userData));

  // }, [token]);

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

  let headersList = {
    "projectId": projectId,
    "Authorization": token,
    "Content-Type": "application/json"
  }

  let bodyContent = JSON.stringify({
    "name": name,
    "email": email,
    "passwordCurrent": currPassword,
    "password": conNewPassword
  });

  let reqOptions = {
    url: "https://academics.newtonschool.co/api/v1/user/updateMyPassword",
    method: "PATCH",
    headers: headersList,
    data: bodyContent,
  }


  const updatePassword = async () => {

    // let response = await fetch("https://academics.newtonschool.co/api/v1/user/updateMyPassword", {
    //   method: "PATCH",
    //   body: bodyContent,
    //   headers: headersList
    // });

    try {
      if (conNewPassword === newPassword) {
        let response = await axios.request(reqOptions);

        if (response.data.token) {
          setCurrPassword('');
          setConNewPassword('');

          toast.success('Password changed Successfully!')
        } else if (!response) {
          setCurrPassword('');
          setConNewPassword('');
          toast.success(response.message);
        }
        console.log(response);
      }
    } catch (error) {
      toast.error(error.message);
      console.error(error);
    }

  }

  return (
    <>
      <div className="profile_headers">

        <div className="left">
          <h3>Update Profile Image :</h3>

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
              <Button variant="contained" className='subButton' endIcon={<TbSend />}>update</Button>
            </div>
          </div>
        </div>

        <div className="middle">
          <h3>Update Password :</h3>
          <div >
            <Stack spacing={3} className="userSettings">

              {/* <TextField
                disabled
                id="name"
                label="Name"
                defaultValue={name}
                variant="filled"
              />
              <TextField
                disabled
                id="email"
                label="Email"
                value={email}
                variant="filled"
              /> */}

              <h3 >My Name: {name}</h3>
              <h3 >My Email: {email}</h3>

              <TextField id="currentPassword" type='text' label="Current Password" variant="filled"
                value={currPassword}
                onChange={(e) => setCurrPassword(e.target.value)}
                InputLabelProps={{ sx: sxx() }}

              />
              {/* {showPassword ? <AiFillEyeInvisible className='eyeIcon' /> : <AiFillEye className='eyeIcon' />} */}
              <TextField id="NewPassword" type='password' label="New Password" variant="filled"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                InputLabelProps={{ sx: sxx() }}
              />

              <TextField id="confirmNewPassword" type='password' label="Confirm New Password" variant="filled" InputLabelProps={{ sx: sxx() }}
                required
                value={conNewPassword}
                onChange={(e) => setConNewPassword(e.target.value)}

              />{
                (newPassword !== conNewPassword) &&
                <span className='notMatched'>
                  Confirm password not matched!
                </span>
              }
              <Button variant="contained" className='passSubButton' endIcon={<RiLockPasswordLine />} onClick={updatePassword}>Update password</Button>
            </Stack>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewtonUser;