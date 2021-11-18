import React, { useState } from 'react';
import { Alert, Button, Input, TextField } from '@mui/material';

const AddDoctor = () => {
    const [success,setSuccess] = useState(false)
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [image,setImage] = useState(null);

    let handleSubmit = e =>{
        setSuccess(false)
        if(!image){
            return
        }
        const fromData = new FormData();
        fromData.append('name',name)
        fromData.append('email',email)
        fromData.append('image',image)
        fetch('https://shrouded-shore-12395.herokuapp.com/doctors',{
            method:"POST",
            body:fromData
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                console.log('doctor added suc');
                setSuccess(true)
            }
        })
        e.preventDefault();
    }
    
    return (
        <div>
            <h3>Add A Doctor</h3>
            <form onSubmit={handleSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    label="Name"
                    required
                    onChange={e=> setName(e.target.value)}
                    variant="standard" />
                <br />
                <TextField
                    sx={{ width: '50%' }}
                    label="Email"
                    type="email"
                    required
                    onChange={e=> setEmail(e.target.value)}
                    variant="standard" />
                <br />
                <Input
                    accept="image/*"
                    type="file"
                    onChange={e=>setImage(e.target.files[0])}
                    
                />
                <br />
                <Button variant="contained" type="submit" onClick={handleSubmit} >
                    Add Doctor
                </Button>
            </form>
            {success && <Alert severity='success' > Doctor added Successfully </Alert>}
        </div>
    );
};

export default AddDoctor;