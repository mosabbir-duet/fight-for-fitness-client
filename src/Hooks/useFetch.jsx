import { useEffect, useState } from "react";

const useFetch = (typeOfInfo) => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch(`https://fight-for-fitness-server.vercel.app/${typeOfInfo}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setInfo(data);
      });
  }, []);
  return [info];
};

export default useFetch;
