import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation, Link } from "react-router-dom";

import "./style.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/logo.svg";

import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../store/userSlice";
import { toast } from "react-toastify";

const Header = () => {
	const [show, setShow] = useState("top");
	const [lastScrollY, setLastScrollY] = useState(0);
	const [mobileMenu, setMobileMenu] = useState(false);
	const [query, setQuery] = useState("");
	const [showSearch, setShowSearch] = useState("");
	const navigate = useNavigate();
	const location = useLocation();
	const { userDetails } = useSelector((state) => state?.user);
	const dispatch = useDispatch();

	const userData = localStorage.getItem("netflix");

	useEffect(() => {
		// console.log(JSON.parse(userData));
		dispatch(getUser(userData));
	}, []);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	const controlNavbar = () => {
		if (window.scrollY > 200) {
			if (window.scrollY > lastScrollY && !mobileMenu) {
				setShow("hide");
			} else {
				setShow("show");
			}
		} else {
			setShow("top");
		}
		setLastScrollY(window.scrollY);
	};

	useEffect(() => {
		window.addEventListener("scroll", controlNavbar);
		return () => {
			window.removeEventListener("scroll", controlNavbar);
		};
	}, [lastScrollY]);

	const searchQueryHandler = (event) => {
		if (event.key === "Enter" && query.length > 0) {
			navigate(`/search/${query}`);
			setTimeout(() => {
				setShowSearch(false);
			}, 1000);
		}
	};

	const openSearch = () => {
		setMobileMenu(false);
		setShowSearch(true);
	};

	const openMobileMenu = () => {
		setMobileMenu(true);
		setShowSearch(false);
	};

	const navigationHandler = (type) => {
		if (type === "movie") {
			navigate("/explore/movie");
		} else if (type === "tv") {
			navigate("/explore/tv");
		} else if (type === "mylist") {
			navigate("user/mylist");
		} else if (type === "profile") {
			navigate("user/profile");
		} else if (type === "explore-plans") {
			navigate("explore-plans");
		}
		setMobileMenu(false);
	};

	// console.log(userDetails);
	const logout = () => {
		try {
			// console.log('logging out....');
			dispatch(getUser(null));
			localStorage.removeItem("netflix");
			toast.success("Successfully logged out!");
		} catch (error) {
			console.error(error);
			toast.error("Something goes very wrong");
		}
	};

	return (
		<header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
			<ContentWrapper>
				<Link
					className='logo'
					to={`${userDetails?.data || userDetails?.user?.displayName ? "/" : "/login"}`}
				>
					<img src={logo} alt='' />
				</Link>
				{userDetails?.data || userDetails?.user?.displayName ? (
					<ul className='menuItems'>
						<li className='menuItem' onClick={() => navigationHandler("movie")}>
							Movies
						</li>
						<li className='menuItem' onClick={() => navigationHandler("tv")}>
							TV Shows
						</li>
						{/* {userDetails?.data || userDetails?.user?.displayName ? */}
						<li className='menuItem' onClick={() => navigationHandler("mylist")}>
							<span>My List</span>
						</li>
						<li className='menuItem' onClick={() => navigationHandler("explore-plans")}>
							<span>Explore Plans</span>
						</li>

						{/* {userDetails?.data || userDetails?.user?.displayName ? */}
						<li className='menuItem' onClick={() => navigationHandler("profile")}>
							<span>Profile</span>
						</li>
						<li className='menuItem'>
							<HiOutlineSearch onClick={openSearch} />
						</li>

						<li className='menuItem'>
							{!userDetails?.data && !userDetails?.user?.displayName ? (
								<Link to={"/login"}>
									<button className='login-btn'>Sign In</button>
								</Link>
							) : (
								<Link onClick={logout}>
									<button className='login-btn'>Logout</button>
								</Link>
							)}
						</li>
					</ul>
				) : (
					<ul className='menuItems'>
						<li className='menuItem' onClick={() => navigationHandler("explore-plans")}>
							<span>Explore Plans</span>
						</li>
						<li className='menuItem'>
							<Link to={"/login"}>
								<button className='login-btn'>Sign In</button>
							</Link>
						</li>
					</ul>
				)}
				<div className='mobileMenuItems'>
					<HiOutlineSearch onClick={openSearch} />
					{mobileMenu ? (
						<VscChromeClose onClick={() => setMobileMenu(false)} />
					) : (
						<SlMenu onClick={openMobileMenu} />
					)}
				</div>
			</ContentWrapper>
			{showSearch && (
				<div className='searchBar'>
					<ContentWrapper>
						<div className='searchInput'>
							<input
								type='text'
								placeholder='Search for a movie or tv show....'
								onChange={(e) => setQuery(e.target.value)}
								onKeyUp={searchQueryHandler}
							/>
							<VscChromeClose onClick={() => setShowSearch(false)} />
						</div>
					</ContentWrapper>
				</div>
			)}
		</header>
	);
};

export default Header;
