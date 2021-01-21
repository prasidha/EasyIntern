import React from 'react'
import {Dialog ,DialogContent ,DialogActions, DialogTitle, IconButton ,Box, Typography} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

function JobViewModal(props) {
    
    return (
        <Dialog open={!!Object.keys(props.data).length} fullWidth>
            
                <DialogTitle>
                <Box display="flex" justifyContent="space-between">
                    Details :
                    <IconButton onClick={props.closeModal}><CloseIcon color="red"/></IconButton>
                </Box>
                </DialogTitle>
                
            <DialogContent>
                <Box display="flex">
                   <Typography>Intern Title :</Typography>
                   <Typography>{props.data.title}</Typography>

                </Box>
            </DialogContent>

            <DialogActions>
            </DialogActions>
          
       
        </Dialog>
    )
}

export default JobViewModal
