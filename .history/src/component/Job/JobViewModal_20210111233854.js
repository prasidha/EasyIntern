import React from 'react'
import {Dialog ,DialogContent ,DialogActions, DialogTitle, IconButton ,Box, Typography ,Button} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

function JobViewModal(props) {
    
    return (
        <Dialog open={!!Object.keys(props.data).length} fullWidth>
            
                <DialogTitle>
                <Box display="flex" justifyContent="space-between" alignItems="center"  color="primary.main">
                    Details :
                    <IconButton onClick={props.closeModal}><CloseIcon color="red"/></IconButton>
                </Box>
                </DialogTitle>
                
            <DialogContent>
            <Box mt={-1}>
                <Box display="flex"  mb={1}>
                    <Typography variant="h5">posted on:</Typography>
                    <Typography variant="h5">{props.data.postedOn}</Typography>
                </Box>

                <Box display="flex"  mb={1}>
                   <Typography variant="h5">Posted By :</Typography>
                   <Typography variant="h5">{props.data.companyName}</Typography>
                </Box>

                <Box display="flex" mb={1}>
                   <Typography variant="h5">Intern Title :</Typography>
                   <Typography variant="h5">{props.data.title}</Typography>
                </Box>

                <Box display="flex" mb={1}>
                    <Typography variant="h5">Company Url:</Typography>
                    <Typography variant="h5">{props.data.url}</Typography>
                </Box>

                <Box display="flex"  mb={1}>
                   <Typography variant="h5">Apply Link:</Typography>
                   <Typography variant="h5">{props.data.link}</Typography>
                </Box>

                <Box display="flex" mb={1}>
                   <Typography variant="h5">Deadline :</Typography>
                   <Typography >{props.data.deadline}</Typography>
                </Box>

               </Box>
            </DialogContent>

            <DialogActions>
            <Button variant="outlined" color="secondary">Apply Now</Button>
            </DialogActions>
          
       
        </Dialog>
    )
}

export default JobViewModal