import { Button, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import RHFTextField from '../../components/control/RHFTextField'
import { account } from '../../appwrite/appwriteConfig';
import {v4 as uuidv4} from 'uuid';
import { sessionDetail } from '../../services/session';

const SignUp = () => {
    const navigate = useNavigate();
    const schema = yup
        .object()
        .shape({
            email: yup.string().email().required(),
            firstname: yup.string().required(),
            lastname: yup.string().required(),
            password: yup.string().required(),
        })
        .required();

    const { handleSubmit, control, formState: { errors } } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        const promise = account.create(
            uuidv4(),
            data?.email,
            data?.password,
            `${data?.firstname} ${data?.lastname}`
        )
        promise.then((response) => {
            sessionStorage.setItem('sessionId', response['$id']);
            sessionStorage.setItem('sessionDetails', JSON.stringify(response) );
            navigate('/');
        }, (error) => {
            console.log(error); // failure 
        }).catch((err) => {
            console.log(err) // failure
        })
    }
    
    useEffect(() => {
        const session = sessionDetail();
        if(session?.isActive){
            navigate('/');
        }
    },[])

    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container justifyContent="center" sx={{ marginTop: '20vh' }} >
                <Grid item sm={6} >
                    <Typography variant='h4' className='title-fontColor' >Sign Up</Typography>
                    <Grid container sm={12} spacing={2} mt={2} >
                        <Grid item sm={6} >
                            <Typography variant='h6' className='label-color'>
                                First Name
                            </Typography>
                            <RHFTextField name="firstname" id="firstname" control={control} errorObj={errors} fullWidth={true} size="small" placeholder="John" />
                        </Grid>
                        <Grid item sm={6} >
                            <Typography variant='h6' className='label-color' >
                                Last Name
                            </Typography>
                            <RHFTextField name="lastname" id="lastname" control={control} errorObj={errors} fullWidth={true} size="small" placeholder="Doe" />
                        </Grid>
                        <Grid item sm={12} >
                            <Typography variant='h6' className='label-color' >
                                Email
                            </Typography>
                            <RHFTextField name="email" id="email" type="email" control={control} errorObj={errors} fullWidth={true} size="small" placeholder="example@abc.com" />
                        </Grid>
                        <Grid item sm={12} >
                            <Typography variant='h6' className='label-color' >
                                Password
                            </Typography>
                            <RHFTextField name="password" id="password" type="password" control={control} errorObj={errors} fullWidth={true} size="small" placeholder="********" />
                        </Grid>
                        <Grid item sm={12} >
                            <Button variant='contained' type='submit'  >
                                Signup
                            </Button>
                            &nbsp;&nbsp;
                            <Link to="/login" > Login </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </form>
    )
}

export default SignUp