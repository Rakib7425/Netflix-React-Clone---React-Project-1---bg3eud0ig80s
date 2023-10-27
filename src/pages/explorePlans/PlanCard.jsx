import React from "react";
import "./planCard.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const PlanCard = ({ plan }) => {
	const newtonUser = useSelector((state) => state?.user?.userDetails?.data);
	const firebaseUser = useSelector((state) => state?.user?.userDetails?.user);

	return (
		<div className='plan-card'>
			<h3 className='plan-name'>{plan.name}</h3>
			<p className='plan-price'>{plan.price}</p>
			<p className='plan-description'>{plan.description}</p>
			<Link
				to={newtonUser || firebaseUser ? "/" : "/login"}
				className={plan.active ? "active " : "subscribe-button"}
			>
				Subscribe{plan.active ? "d" : ""}
			</Link>
		</div>
	);
};

export default PlanCard;
