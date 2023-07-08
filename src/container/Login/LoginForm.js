import { TextField } from '@mui/material';
import React from 'react';
import { Navigate } from 'react-router-dom';
// import { CustomButton } from '../../Ui/Button/ButtonCustom';
import Button from '../../Ui/Button/Button';
import { CustomButton } from '../../Ui/Button/ButtonCustom';
import Input from '../../Ui/Input/Input';

function LoginForm(props) {
    const navigate = Navigate

    const handleSubmit = () => {
        let localData = localStorage.setItem('status', true)
        if (localData) {
            navigate('/')
        }
    }
    return (
        <>
            <form style={{ margin: '200px 800px', border: '2px solid #002884', padding: '30px' }}>
                <Input
                    fullWidth
                    type='text'
                    id="fullWidth"
                    placeholder="Name"
                    variant="standard"
                    name='name'
                />
                <br></br>
                <Input
                    fullWidth
                    type='email'
                    id="standard-basic"
                    placeholder="Email"
                    variant="standard"
                    name='email'
                />
                <br></br>
                <Input
                    fullWidth
                    type='password'
                    id="standard-basic"
                    placeholder="Password"
                    variant="standard"
                    name='password'
                />
                <br></br>
                <CustomButton onClick={handleSubmit}>Submit</CustomButton>
                {/* <Button> Submit </Button> */}
                {/* <Button type='submit' onClick={handleSubmit}>Submit</Button> */}
            </form>
        </>
    );
}

export default LoginForm;