import React from "react";
import { Card, Grid } from "semantic-ui-react";
const DataCard = props => {
  return (
    <Grid columns={3} divided>
      <Grid.Row>
        <Grid.Column>
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
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default DataCard;
