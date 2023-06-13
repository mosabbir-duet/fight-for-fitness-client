import { useEffect, useState } from "react";

const useFetchSortedInfo = (typeOfInfo) => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/${typeOfInfo}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setInfo(data);
      });
  }, []);
  return [info];
};

export default useFetchSortedInfo;
