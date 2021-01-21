import React from 'react'
import {Dialog ,DialogContent ,DialogActions, DialogTitle, IconButton ,Box} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

function JobViewModal(props) {
    return (
        <Dialog open={objects.key(props.open).length} fullWidth>
            
                <DialogTitle>
                <Box display="flex" justifyContent="space-between">
                    Details :
                    <IconButton onClick={props.close}><CloseIcon color="red"/></IconButton>
                </Box>
                </DialogTitle>
                
            <DialogContent>
            
            </DialogContent>

            <DialogActions>
            </DialogActions>
          
       
        </Dialog>
    )
}

export default JobViewModal
