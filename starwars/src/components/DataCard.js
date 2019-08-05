import React from "react";
import { Card } from "semantic-ui-react";
const DataCard = props => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>
          <h1>{props.name}</h1>
        </Card.Header>
        <Card.Description>
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
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default DataCard;
