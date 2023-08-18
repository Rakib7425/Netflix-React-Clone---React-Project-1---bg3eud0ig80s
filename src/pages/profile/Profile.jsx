import React, { useEffect, useState } from 'react'
import './style.scss';
import ContentWrapper from '../../components/contentWrapper/ContentWrapper';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';

import avatar from '../../assets/avatar.png';
import Img from '../../components/lazyLoadImage/Img';
import { MdUploadFile } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
import FirebaseUser from './firebaseUser/FirebaseUser';
// import NewtonUser from './newtonUser/NewtonUser';
import NewtonUser from './newtonUser/newtonUser';


const Profile = () => {
    const [userImg, setUserImg] = useState(avatar);

    const [userData, setUserData] = useState({});
    const [isNewtonUser, setIsNewtonUser] = useState(false);

    const newtonUser = useSelector((state) => state?.user?.userDetails?.data);
    const firebaseUser = useSelector((state) => state?.user?.userDetails?.user);
    const navigate = useNavigate();


    // const [newtonUser, setNewtonUser] = useState([]);
    // const [firebaseUser, setFirebaseUser] = useState([]);

    // useEffect(() => {
    //     setNewtonUser(useSelector((state) => state?.user?.userDetails?.data));
    //     setFirebaseUser(useSelector((state) => state?.user?.userDetails?.user));
    // }, [])


    useEffect(() => {
        if (newtonUser) {
            setIsNewtonUser(true);
            setUserData(newtonUser);

        } else if (firebaseUser) {
            setIsNewtonUser(false);
            setUserData(firebaseUser);

        }
        else {
            navigate('/login')
        }
    }, [userData]);

    // console.log(newtonUser);
    // console.log(firebaseUser?.displayName);
    // console.log(userData);

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
        setUserImg(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <ContentWrapper>
            {/* <div className='_main_'> */}
            <div>
                <h1 className='pageTitle'>
                    My Profile {isNewtonUser ? '(Newton User).' : '(Firebase User)'}
                </h1>
                {/* <h1>Working on this Page</h1> */}
            </div>
            <div className="content">

                {isNewtonUser ? <NewtonUser userData={userData} /> : <FirebaseUser userData={userData} />}
            </div>
        </ContentWrapper>
    )
}

export default Profile;