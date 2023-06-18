import { useEffect, useState } from "react";
const DEFAULT_CENTER = [9.0953328, 45.4628246];
const geoOptions = Object.freeze({
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
});

export const useGeolocation = () => {
  const [position, setPosition] = useState();

  useEffect(() => {
    const onSuccess = (pos) => {
      setPosition([pos.coords.longitude, pos.coords.latitude]);
    };

    const onError = (err) => {
      setPosition(DEFAULT_CENTER);
      console.log(err);
    };
    navigator.geolocation.getCurrentPosition(onSuccess, onError, geoOptions);
  }, []);

  return { position };
};
