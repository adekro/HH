import React from "react";
import classes from "./style.module.css";

const MenuItem = (props) => {
	const handlerClick = () => {
		props.goPage(props.action);
	};
	return (
		<React.Fragment>
			<div className={classes.content} onClick={handlerClick}>
				<div className={classes.image}>
					<img src={props.image} alt="" />
				</div>
				<div className={classes.label}>
					<label>{props.label}</label>
				</div>
			</div>
		</React.Fragment>
	);
};
export default MenuItem;
