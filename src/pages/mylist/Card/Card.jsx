import React from 'react';
import './style.scss';
import Img from '../../../components/lazyLoadImage/Img';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { MdDelete, MdFileDownloadDone } from 'react-icons/md';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';

const Card = ({ data }) => {

    const { url } = useSelector((state) => state.home);
    const navigate = useNavigate();
    const posterUrl = data.poster_path
        ? url.poster + data.poster_path
        : PosterFallback;
        
    return (
        <div className="container">
            <div className="img-container">
                <Img src={posterUrl} alt="" />
            </div>
            <ul className="social-media">

                <li><Link ><MdFileDownloadDone size={30} color='white' /></Link></li>
                <li><Link ><MdDelete size={30} color='white' /></Link></li>

            </ul>
            <div className="user-info">
                <h2>{data?.title}</h2>
                <span>{data?.release_date}</span>
            </div>
        </div>
    );
}

export default Card;