import React, { useEffect, useState } from 'react';
import ContentWrapper from '../../components/contentWrapper/ContentWrapper';

import MovieCard from '../../components/movieCard/MovieCard';
import { useSelector } from 'react-redux';
import { where, query, deleteDoc, updateDoc, doc, collection, getDocs } from 'firebase/firestore';
import { db } from "../../firebase/firebase";
import Spinner from '../../components/spinner/Spinner'
import './style.scss'


const Mylist = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const newtonUser = useSelector((state) => state?.user?.userDetails?.data);
    const firebaseUser = useSelector((state) => state?.user?.userDetails?.user);
    // console.log(firebaseUser);

    const fetchMovieList = async (userId) => {
        setIsLoading(true);
        try {
            const qry = query(collection(db, 'netflix'), where('owner', '==', userId));
            const querySnapshot = await getDocs(qry);
            let data = [];
            querySnapshot.forEach((doc) => {
                // console.log(doc.id, '=>>>>', doc.data());
                if (!doc.data().watched) {
                    data.push({ ...doc.data(), id: doc.id })
                }
                // console.log(doc.data().watched);
            });

            setData(data);
            console.log(data);
            setIsLoading(false);

        } catch (error) {
            console.error("Error From fetchMovieList function.", error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (firebaseUser) {
            fetchMovieList(firebaseUser.uid);
        }

    }, []);


    return (
        <ContentWrapper>
            <div className='_main_'>
                <h1 className='pageTitle'>
                    Mylist
                </h1>
                <h1 style={{ color: 'red' }}>Working on this Page</h1>
            </div>

            <div className="listContent">
                {isLoading ? <Spinner /> :
                    data && data.map((item) => {
                        return (
                            // <section className='cards' key={item.id}>
                            <MovieCard key={item.id} data={item} fromSearch={item} mediaType={'tv'} />
                            // </section>
                        );
                    })
                }
            </div>

        </ContentWrapper>
    )
}

export default Mylist;