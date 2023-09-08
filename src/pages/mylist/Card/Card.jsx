import React from 'react';
import './style.scss';
import Img from '../../../components/lazyLoadImage/Img';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { MdDelete, MdFileDownloadDone } from 'react-icons/md';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { auth, db } from '../../../firebase/firebase';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useEffect } from 'react';

const Card = ({ data, tempRender, setTempRender }) => {

    const { url } = useSelector((state) => state.home);
    const navigate = useNavigate();
    const posterUrl = data.poster_path
        ? url.poster + data.poster_path
        : PosterFallback;





    const handleDelete = async (docId) => {
        console.log(docId);
        console.log(auth.currentUser);
        try {
            await deleteDoc(doc(db, 'netflix', docId));
            setTempRender(tempRender + 1);

            toast.success(`Successfully deleted`);

        } catch (error) {
            console.error("Error From deleteBooking function.", error);
            toast.error(error);
        }
    }
    const markAsWatched = async (docID) => {
        try {
            // To update watched field :
            const docRef = doc(db, "netflix", docID);
            await updateDoc(docRef, {
                watched: true,
            });
            setTempRender(tempRender + 1);
            toast.success(`Successfully Updated. Marked as Watched`);

        } catch (error) {
            toast.error(error);
            console.error("Error From markAsWatched function.", error);
        }
    };


    return (
        <div className="container">
            <div className="img-container">
                <Img src={posterUrl} alt="" />
            </div>
            <ul className="option-icon">

                <li onClick={() => markAsWatched(data.id)}><Link ><MdFileDownloadDone size={30} color='white' /></Link></li>
                <li onClick={() => (handleDelete(data.id))}><Link ><MdDelete size={30} color='red' /></Link></li>

            </ul>
            <div className="user-info">
                <h2>{data?.title}</h2>
                <span>{data?.release_date}</span>
            </div>
        </div>
    );
}

export default Card;