import React from 'react'
import {Dialog ,DialogContent ,DialogActions, DialogTitle, Button ,Box} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

function JobViewModal() {
    return (
        <Dialog open ={true} fullWidth>
            
                <DialogTitle>
                <Box display="flex" justifyContent="space-between">
                    Details :
                    <Button><CloseIcon color="red"/></Button>
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
