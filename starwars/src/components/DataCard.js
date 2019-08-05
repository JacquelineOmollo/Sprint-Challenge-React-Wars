import React from "react";

const DataCard = props => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>
        <strong>"Birthday Year:</strong> {props.birthday}
      </p>
      <p>
        <strong>"Height:</strong> {props.height}
      </p>
      <p>
        <strong>"Mass:</strong> {props.mass}
      </p>
      <p>
        <strong>"Eye Color:</strong> {props.eyeColor}
      </p>

      <p>
        <strong>"Hair Color:</strong> {props.hairColor}
      </p>
      <p>
        <strong>"Gender:</strong> {props.gender}
      </p>
    </div>
  );
};

export default DataCard;
