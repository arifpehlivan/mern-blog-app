import React from 'react'
import {AppBar, Button, Toolbar, Typography} from "@mui/material"
import { Box } from '@mui/system'

const Header = () => {
    return (
        <AppBar sx={{background: "linear-gradient(90deg, rgba(7,1,17,0.07076333951549374) 0%, rgba(25,12,12,0.8410714627647934) 0%)"}}>
            <Toolbar>
                <Typography variant='h4'>Blogs App</Typography>
                <Box display="flex" marginLeft="auto">
                    <Button variant='contained' sx={{margin: 1, borderRadius: 10}} color='warning'>Login</Button>
                    <Button variant='contained' sx={{margin: 1, borderRadius: 10}} color='warning'>Signup</Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header