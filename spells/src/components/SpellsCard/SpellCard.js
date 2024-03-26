import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import './SpellCard.css'; // Import the CSS file

function SpellCard({
  headerAction,
  index,
  isSaved,
  name,
  children,
  description,
  castingTime,
  range,
  components,
  duration
}) {
  return (
    <Card variant="outlined" className="card">
      <CardContent>
        <Typography variant="h2" component="h2" className="cardTitle">
          {name}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" className="cardIndex">
          {index}
        </Typography>
        <Typography variant="subtitle2" color="textSecondary">
          {headerAction}
        </Typography>
        {isSaved && (
          <Typography variant="subtitle2" color="textSecondary">
            Saved
          </Typography>
        )}
        <Typography variant="body1" component="p" className="cardDescription">
          {description}
        </Typography>
        <Grid container spacing={1} className="cardDetails">
          <Grid item xs={6}>
            <Typography variant="body2" color="textSecondary" className="cardAttribute">
              Casting Time: {castingTime}
            </Typography>
            <Typography variant="body2" color="textSecondary" className="cardAttribute">
              Range: {range}
            </Typography>
            <Typography variant="body2" color="textSecondary" className="cardAttribute">
              Components: {components}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="textSecondary" className="cardAttribute">
              Duration: {duration}
            </Typography>
            <Typography variant="body2" color="textSecondary" className="cardAttribute">
              Header Action: {headerAction}
            </Typography>
            {/* Add more details here */}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default SpellCard;
