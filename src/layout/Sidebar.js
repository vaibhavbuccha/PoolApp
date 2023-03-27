import React from 'react'
import { Box, Grid } from '@mui/material'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Link } from 'react-router-dom';
import './Style/Sidebar.scss';

const Sidebar = () => {

    const menuItems = [
        {
            path: '/',
            icon: <HomeOutlinedIcon />
        },
        {
            path: '/',
            icon: <HomeOutlinedIcon />
        }
    ]
  return (
    <Grid item sm={1} className="sidebar" >
        {
            menuItems?.map((item , i)=> (
                <Grid key={i} p={2} justifyContent="center" className='menu-link'>
                    {item?.icon}
                </Grid>
            ))
        }
    </Grid>
  )
}

export default Sidebar