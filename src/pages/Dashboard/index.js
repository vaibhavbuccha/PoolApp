import { Card, CardContent, CardHeader, Grid, Typography, IconButton } from '@mui/material'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import InsertInvitationOutlinedIcon from '@mui/icons-material/InsertInvitationOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import React from 'react'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <Grid container spacing={12} display="flex" justifyContent="space-around" >
      <Grid item xs={3} >
        <Card>
          <CardHeader title={<Typography variant='h5' >Create Pool</Typography>} />
          <CardContent align="center" >
            <IconButton>
              <AddCircleOutlineOutlinedIcon className="dashboardIcon" />
            </IconButton>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={3} >
        <Card>
          <CardHeader title={<Typography variant='h5' >Check Invitations</Typography>} />
          <CardContent align="center" >
            <IconButton>
              <InsertInvitationOutlinedIcon className="dashboardIcon" />
            </IconButton>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={3} >
        <Card>
          <CardHeader title={<Typography variant='h5' >Check Submissions</Typography>} />
          <CardContent align="center" >
            <IconButton>
              <InventoryOutlinedIcon className="dashboardIcon" />
            </IconButton>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={3} >
        <Card>
          <CardHeader title={<Typography variant='h5' >Your Pools</Typography>} />
          <CardContent align="center" >
            <IconButton>
              <PollOutlinedIcon className="dashboardIcon" />
            </IconButton>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Dashboard