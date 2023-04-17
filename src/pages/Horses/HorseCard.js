import classes from "./Horses.module.css";
const HorseCard = ({ name, nickname, bread, gender, id }) => {
	return (
		<div className={classes.content}>
			<div className={classes.card}>
				<img src={"/public/horse/" + id + ".png"} alt="" />
			</div>
			<div className={classes.info}>
				<label>{name}</label>
				<label>{nickname}</label>
				<label>{bread}</label>
				<label>{gender}</label>
			</div>
		</div>
	);
};
export default HorseCard;
