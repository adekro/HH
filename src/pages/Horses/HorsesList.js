import HorseCard from "./HorseCard";
import classes from "./Horses.module.css";
const HorsesList = ({ horses }) => {
	return (
		<div className={classes.content}>
			{horses.map((horse) => {
				return (
					<div key={horse.id}>
						<HorseCard
							name={horse.name}
							nickname={horse.nickname}
							gender={horse.gender}
							bread={horse.bread}
							id={horse.id}
						/>
					</div>
				);
			})}
		</div>
	);
};
export default HorsesList;
