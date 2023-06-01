import React from 'react';
import { Card, CardHeader, CardContent, Grid, TextField, InputAdornment, Paper } from '@material-ui/core';
import SchoolIcon from '@material-ui/icons/School';

const Profile = (props) => {
  const { values, handleChange } = props;

  return (
    <div>
      <h1>Profile</h1>
      <Paper>
        <Card>
          <CardHeader title="Education Details" />
        </Card>
        <CardContent>
          <div>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="college"
                  label="College/University"
                  style={{ width: '80%' }}
                  required
                  value={values.college}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <SchoolIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              {/* Add more input fields for education details */}
            </Grid>
          </div>
        </CardContent>
      </Paper>
    </div>
  );
};

export default Profile;
