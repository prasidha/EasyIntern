import React from 'react'
import {Dialog ,DialogContent ,DialogActions, DialogTitle, IconButton ,Box, Typography ,Button} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

function JobViewModal(props) {
    
    return (
        <Dialog open={!!Object.keys(props.data).length} fullWidth>
            
                <DialogTitle>
                <Box display="flex" justifyContent="space-between" alignItems="center" border="1px solid" color="primary.main">
                    Details :
                    <IconButton onClick={props.closeModal}><CloseIcon color="red"/></IconButton>
                </Box>
                </DialogTitle>
                
            <DialogContent>
            <Box mt={-1}>
                <Box display="flex"  mb={1}>
                    <Typography variant>posted on:</Typography>
                    <Typography>{props.data.postedOn}</Typography>
                </Box>

                <Box display="flex"  mb={1}>
                   <Typography>Posted By :</Typography>
                   <Typography>{props.data.companyName}</Typography>
                </Box>

                <Box display="flex" mb={1}>
                   <Typography>Intern Title :</Typography>
                   <Typography>{props.data.title}</Typography>
                </Box>

                <Box display="flex" mb={1}>
                    <Typography>Company Url:</Typography>
                    <Typography>{props.data.url}</Typography>
                </Box>

                <Box display="flex"  mb={1}>
                   <Typography>Apply Link:</Typography>
                   <Typography>{props.data.link}</Typography>
                </Box>

                <Box display="flex" mb={1}>
                   <Typography>Deadline :</Typography>
                   <Typography>{props.data.deadline}</Typography>
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
