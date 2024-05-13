import { useEffect } from "react";
import { useState } from "react";

const WeatherIcon = () => {
  const [latitude, setLatitude] = useState();
  const [longitude, setLogitude] = useState();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLogitude(position.coords.longitude);
    });
  }, []);
  return <div>WeatherIcon</div>;
};

export default WeatherIcon;
