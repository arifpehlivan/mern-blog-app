import React, { useState } from 'react'
import { AppBar, Button, Tab, Tabs, Toolbar, Typography } from "@mui/material"
import { Box } from '@mui/system'
import { Link } from 'react-router-dom'

const Header = () => {
    const [value, setValue] = useState("");
    return (
        <AppBar position='sticky' sx={{ background: "linear-gradient(90deg, rgba(7,1,17,0.07076333951549374) 0%, rgba(25,12,12,0.8410714627647934) 0%)" }}>
            <Toolbar>
                <Typography variant='h4'>Blogs App</Typography>
                <Box display="flex" marginLeft="auto" marginRight="auto">
                    <Tabs textColor='inherit' value={value} onChange={(e, val) => setValue(val)}>
                        <Tab LinkComponent={Link} to="/blogs" label="All Blogs" />
                        <Tab LinkComponent={Link} to="/myBlogs" label="My Blogs" />
                    </Tabs>
                </Box>
                <Box display="flex" marginLeft="auto">
                    <Button LinkComponent={Link} to="/auth" variant='contained' sx={{ margin: 1, borderRadius: 10 }} color='warning'>Login</Button>
                    <Button LinkComponent={Link} to="/auth" variant='contained' sx={{ margin: 1, borderRadius: 10 }} color='warning'>Signup</Button>
                    <Button LinkComponent={Link} to="/auth" variant='contained' sx={{ margin: 1, borderRadius: 10 }} color='warning'>Logout</Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header