import React from 'react'
import {Box ,Typography ,Grid ,Button} from '@material-ui/core'
function Header(props) {
    return (
        <Box bgcolor="primary.main" py={13} color="white">
           <Grid container justify="center">
                <Grid item xs={10}>
                    <Box display="flex" justifyContent="space-between">    
                        <Typography variant="h4">
                        Intern Post Lists
                        </Typography>
                        <Button variant="contained" color="secondary" disableElevation onClick={props.openModal}>post an Intern</Button>
                    </Box>    
                </Grid>
           </Grid>
        </Box>
    )
}

export default Header