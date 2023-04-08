import React,{useEffect, useState} from 'react'
import {Card, CardContent, CardHeader, Grid, Typography} from '@mui/material';
import {account} from "../../appwrite/appwriteConfig";

const Profile = () => {
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    account.get().then((details) => {
      const nameArr = details?.name?.split(" ");
      const obj = {
        firstName: nameArr[0],
        lastName: nameArr[1],
        email: details?.email
      }
      setUserDetails(obj);
    }).catch((err) => {
      console.log(err)
    })
  },[])

  return (
    <Grid container display="flex" justifyContent="space-around" >
      <Grid item lg={6} >
        <Card>
          <CardHeader title="Profile Details" />
          <CardContent>
            <Grid container spacing={2} >
                <Grid item md={6} xs={12} >
                  <Typography variant='h5' >First Name</Typography>
                  <Typography variant='body2' >{userDetails?.firstName || 'N/A'  }</Typography>
                </Grid>
                <Grid item md={6} xs={12} >
                  <Typography variant='h5' >Last Name</Typography>
                  <Typography variant='body2' >{userDetails?.lastName || 'N/A'}</Typography>
                </Grid>
                <Grid item md={12} xs={12} >
                  <Typography variant='h5' >Email</Typography>
                  <Typography variant='body2' >{userDetails?.email || 'N/A'}</Typography>
                </Grid>
            </Grid>
          </CardContent>
        </Card>  
      </Grid>      
    </Grid>
  )
}

export default Profile