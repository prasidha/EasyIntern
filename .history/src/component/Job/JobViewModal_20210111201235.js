import React from 'react'
import {Dialog ,DialogContent ,DialogActions, DialogTitle, Button ,Box} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

function JobViewModal() {
    return (
        <Dialog open ={true} fullWidth>
            <Box display="flex" justifyContent="space-between">
                <DialogTitle>
                    Details :
                </DialogTitle>
                <Button><CloseIcon color="red"/></Button>
            <DialogContent>
            
            </DialogContent>
            DialogActions>
            </Box>
       
        </Dialog>
    )
}

export default JobViewModal
