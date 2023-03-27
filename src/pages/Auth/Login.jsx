import { Button, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import RHFTextField from '../../components/control/RHFTextField'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { account } from '../../appwrite/appwriteConfig';
import {getSession, sessionDetail} from '../../services/session';
import * as yup from 'yup';

const Login = () => {
    const navigate = useNavigate();
    const schema = yup
    .object()
    .shape({
        email: yup.string().email().required(),
        password: yup.string().required(),
    })
    .required();

    const { handleSubmit, control, setValue, formState: { errors } } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        account.createEmailSession(data?.email, data?.password).then((response) => {
            sessionStorage.setItem('sessionId', response['$id']);
            sessionStorage.setItem('sessionDetails', JSON.stringify(response) );
            navigate('/');
        }).catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        const session = sessionDetail();
        if(session?.isActive){
            navigate('/');
        }
    },[])

  return (
    <Grid container justifyContent="center" sx={{ marginTop: '25vh' }} >
        <Grid item sm={6} >
        <form onSubmit={handleSubmit(onSubmit)} >
            <Typography variant='h4' className='title-fontColor' >Login</Typography>
            <Grid container sm={12} spacing={2} mt={1} >
                <Grid item sm={12} >
                    <Typography variant='h6'className='label-color' >
                        Email
                    </Typography>
                    <RHFTextField name="email" id="email" type="email" control={control} errorObj={errors} fullWidth={true} size="small" placeholder="example@abc.com" />
                </Grid>
                <Grid item sm={12} >
                    <Typography variant='h6'className='label-color' >
                        Password
                    </Typography>
                    <RHFTextField name="password" id="password" type="password" control={control} errorObj={errors} fullWidth={true} size="small" placeholder="********" />
                </Grid>
                <Grid item sm={12} >
                    <Button variant='contained' type='submit' >
                        Login
                    </Button>
                    &nbsp;&nbsp;
                    <Link to="/signup" >Sign up</Link>
                </Grid>
            </Grid>
        </form>
        </Grid>
    </Grid>
  )
}

export default Login