import React from 'react'
import {Dialog ,DialogContent ,DialogActions, DialogTitle, Button ,Box} from '@material-ui/core'
import {CloseIcon from '@material-ui/icons/Close'

function JobViewModal() {
    return (
        <Dialog open ={true}>
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
