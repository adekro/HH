import React from "react";
import classes from "./style.module.css";

const MenuItem = ({ action, image, label, goPage }) => {
	const handlerClick = () => {
		goPage(action);
	};
	return (
		<React.Fragment>
			<div className={classes.content} onClick={handlerClick}>
				<div className={classes.image}>
					<img src={image} alt="" />
				</div>
				<div className={classes.label}>
					<label>{label}</label>
				</div>
			</div>
		</React.Fragment>
	);
};
export default MenuItem;
