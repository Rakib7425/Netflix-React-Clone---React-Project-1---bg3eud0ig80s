import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react'
import { auth } from '../firebase/firebase';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUser } from '../store/userSlice'
import { useDispatch } from 'react-redux';

const provider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


export const loginWithGoogle = async () => {
    // let data = [];
    const dispatch = useDispatch();
    const navigate = useNavigate();
    try {
        const user = await signInWithPopup(auth, provider);
        // console.log(user);
        toast.success(`Successfully logged in`);
        let data = user;
        console.log(data);

        // window.location.href = '/';
        // *set user details
        // useEffect(() => {
        dispatch(getUser(data));
        // }, [data]);

        // setdata(user);
        // setTimeout(() => {
        // setLoading(false);
        // navigate('/');
        // }, 1000)

    } catch (error) {
        console.log('Error From loginWithGoogle', error);
        toast.error(`Login Failed : ${error.message}`);
    }
};


export const loginWithGithub = async () => {
    try {
        const user = await signInWithPopup(auth, githubProvider);
        console.log(user);
        toast.success(`Successfully logged in`);
    } catch (error) {
        console.error('Error From loginWithGitHub', error);
        toast.error(`Login Failed : ${error.message}`);
    }
};



// }
// export default firebaseAuth;