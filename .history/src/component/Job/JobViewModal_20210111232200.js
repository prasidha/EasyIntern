import React from 'react'
import {Dialog ,DialogContent ,DialogActions, DialogTitle, IconButton ,Box, Typography} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

function JobViewModal(props) {
    console.log(props.job)
    return (
        <Dialog open={!!Object.keys(props.d).length} fullWidth>
            
                <DialogTitle>
                <Box display="flex" justifyContent="space-between">
                    Details :
                    <IconButton onClick={props.closeModal}><CloseIcon color="red"/></IconButton>
                </Box>
                </DialogTitle>
                
            <DialogContent>
                <Box>
                   <Typography>Intern Title :</Typography>
                   <Typography>{props.}</Typography>

                </Box>
            </DialogContent>

            <DialogActions>
            </DialogActions>
          
       
        </Dialog>
    )
}

export default JobViewModal
