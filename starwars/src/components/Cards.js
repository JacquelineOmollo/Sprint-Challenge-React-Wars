import React, { useState, useEffect } from "react";
import DataCard from "../components/DataCard";
import axios from "axios";

const Cards = () => {
  const [peopleData, setData] = useState([]);

  useEffect(() => {
    setData([]);
    axios
      .get("https://swapi.co/api/people")

      .then(response => {
        console.log(response.data);
        setData(response.data.results);
      })

      .catch(err => console.log(err, "Errors where found"));
  }, []);
  // console.log("");

  return peopleData.map((item, index) => (
    <div>
      <DataCard
        name={item.name}
        birthday={item.birth_year}
        height={item.height}
        mass={item.mass}
        gender={item.gender}
        eyeColor={item.eye_color}
        hairColor={item.hair_color}
      />
    </div>
  ));
};

export default Cards;
