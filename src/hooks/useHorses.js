import { useCallback, useEffect } from "react";
import { useState } from "react";
import horseLoader from "../data/horsesLoader";

const useHorses = () => {
  const [horses, setHorses] = useState([]);

  useEffect(() => {
    horseLoader.init();
    setHorses(horseLoader.getItems());
  }, []);

  const addHorse = useCallback((newHorse) => {
    setHorses((previousHorses) => {
      const updated = previousHorses.concat(newHorse);

      return updated;
    });
  }, []);

  const removeHorse = useCallback((id) => {
    setHorses((previousHorses) => {
      const updated = previousHorses.filter(
        (horse) => horse.id !== id
      );

      return updated;
    });
  }, []);

  const updatedHorse = useCallback((id, updatedHorse) => {
    setHorses((previousHorses) => {
      const horseToUpdate = {
        ...previousHorses.find((horse) => horse.id === id),
        ...updatedHorse,
      };
      const updated = previousHorses.map((horse) =>
      horse.id === id ? horseToUpdate : horse
      );

      return updated;
    });
  }, []);

  return { horses, addHorse, removeHorse, updatedHorse };
};

export default useHorses;