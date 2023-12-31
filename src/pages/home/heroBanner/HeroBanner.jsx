import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./style.scss";

import useFetch from "../../../hooks/useFetch";

import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import { CiSearch } from "react-icons/ci";

import { useSelector } from "react-redux";

const HeroBanner = () => {
	const [background, setBackground] = useState("");
	const [query, setQuery] = useState("");
	const [name, setName] = useState("");
	const navigate = useNavigate();
	const { url } = useSelector((state) => state.home);
	const { data, loading } = useFetch("/movie/upcoming");

	useEffect(() => {
		const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
		setBackground(bg);
	}, [data]);

	const searchQueryHandler = (event) => {
		if (event.key === "Enter" && query.length > 0) {
			navigate(`/search/${query}`);
		}
	};

	const handleSearch = () => {
		if (query.length > 0) {
			navigate(`/search/${query}`);
		}
	};

	const getUserName = useSelector((state) => {
		let userName = "";
		if (state?.user?.userDetails?.data?.data?.name) {
			userName = state?.user?.userDetails?.data?.data?.name;
		} else if (state?.user?.userDetails?.user?.displayName) {
			userName = state?.user?.userDetails?.user?.displayName;
		}

		return userName;
	});

	useEffect(() => {
		
		setName(getUserName);
	}, [name]);

	return (
		<div className='heroBanner'>
			{!loading && (
				<div className='backdrop-img'>
					<Img src={background} />
					{/* <video height={500} width={500} style={{ zIndex: 100 }} autoPlay>
						<source
							src='https://www.youtube.com/embed/NbyHNASFi6U?si=ag934B9zfypOaJrz'
							type='video/mp4'
						></source>
					</video> */}
				</div>
			)}

			<div className='opacity-layer'></div>
			<ContentWrapper>
				<div className='heroBannerContent'>
					<span className='title'>Welcome</span>
					<span className='name'>{name && ` ${name}`}</span>
					<span className='subTitle'>
						Unlimited movies, TV shows and more Explore now.
					</span>
					<div className='searchInput'>
						<input
							type='text'
							placeholder='Search for a movie or tv show....'
							onChange={(e) => setQuery(e.target.value)}
							onKeyUp={searchQueryHandler}
						/>
						<button className='btn' onClick={handleSearch}>
							<span>Search</span>{" "}
							<span className='icon'>
								<CiSearch size={25} color='white' />
							</span>
						</button>
					</div>
				</div>
			</ContentWrapper>
		</div>
	);
};

export default HeroBanner;
