import React from 'react';
import Rating from '@material-ui/lab/Rating';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function SimpleRating(props) {
  const [value, setValue] = React.useState(2);

  return (
    <div>
      {console.log("el",props.el)}
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Controlled</Typography>
        <Rating
          name="simple-controlled"
         value={props.el.rating}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        
      </Box>    
    </div>
  );
}
