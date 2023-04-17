import React, { useState } from "react";
import classes from "./Horses.module.css";
const HorseCard = ({ name, nickname, bread, gender, id }) => {
	const [isChanged, setChenged] = useState(false);
	const [valueName, setValueName] = useState(name);
	const [valueNickName, setValueNickName] = useState(nickname);
	const [valueBread, setValueBread] = useState(bread);
	const [valueGender, setValueGender] = useState(gender);

	const inputChangeHandler = () => {
		setChenged(true);
	};

	return (
		<div className={classes.content}>
			<div className={classes.card}>
				<img src={"/public/horse/" + id + ".png"} alt="" />
			</div>
			<div className={classes.info}>
				<input type="text" value={valueName} onChange={inputChangeHandler} />
				<input
					type="text"
					value={valueNickName}
					onChange={inputChangeHandler}
				/>
				<input type="text" value={valueBread} onChange={inputChangeHandler} />
				<input type="text" value={valueGender} onChange={inputChangeHandler} />
			</div>
			{isChanged && <button>Save</button>}
		</div>
	);
};
export default HorseCard;
