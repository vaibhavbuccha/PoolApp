import { Box, Grid } from '@mui/material'
import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import {account} from '../appwrite/appwriteConfig';
import { useNavigate } from 'react-router-dom';
import { sessionDetail } from '../services/session';

const Main = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    const session = sessionDetail();
    if(!session?.isActive){
      navigate('/login');
    }
  },[])


  return (
    <Box>
      {/* App Bar */}
      <Header />
      <Grid container spacing={2} >
        {/* <Sidebar /> */}
        {/* Side Bar */}
        {/* Main Area */}
      </Grid>
    </Box>
  )
}

export default Main