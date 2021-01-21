import React from 'react'
import {Dialog ,DialogContent ,DialogActions, DialogTitle, Button} from '@material-ui/core'
import {CloseIcon} from '@material-ui/icons'

function JobViewModal() {
    return (
        <Dialog>
            <Box>
                <DialogTitle>
                    Details
                </DialogTitle>
                <Button><CloseIcon/></Button>
            </Box>
       
        </Dialog>
    )
}

export default JobViewModal
