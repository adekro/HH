import classes from "./Horses.module.css";
const HorsesList = ({horses}) => {
	return (
		<div className={classes.content}>
			{horses.map((horse) => {
				return (
					<div key={horse.id}>
						<div className={classes.card}>card</div>
						<div className={classes.info}>{horse.name}</div>
					</div>
				);
			})}
		</div>
	);
};
export default HorsesList;
