import React from 'react';
import { useState } from 'react';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import ExploreIcon from '@mui/icons-material/Explore';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import logo from '../images/logo.png';


export default function Header({classes}) {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <AppBar >
                <Toolbar className={classes.toolbar}>
                    <div className="mainLogo">
                        <img src={logo} alt='meet_logo' />
                    </div>
                    <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example" className={classes.tabs}>
                        <Tab icon={<ExploreIcon />} label="Discovery" />
                        <Tab icon={<PeopleAltOutlinedIcon />} label="Invited" />
                        <Tab icon={<SupportAgentIcon />} label="Support" />
                    </Tabs>
                    <Typography
                        variant='div'
                        component='div'
                    >
                        <Button variant='outlined' size='small' color='secondary' >Post Job</Button>
                        <Button variant='contained' size='small' sx={{ marginLeft: '15px' }} color='secondary' >Sign In</Button>
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}
