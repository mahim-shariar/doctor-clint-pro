import React from 'react';
import { Grid } from '@mui/material';

const Doctor = ({ doctor }) => {
    const { name, img } = doctor;
    return (
        <Grid item xs={12} sm={6} md={4}>
            <img
            className='rounded-circle'
                style={{width:'250px',height:'250px'}}
                src={`data:image/png;base64,${img}`} alt="" />
            <h3>{name}</h3>
        </Grid>
    );
};

export default Doctor;