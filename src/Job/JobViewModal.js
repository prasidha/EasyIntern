import React ,{ useState , useEffect } from 'react'
import { Dialog, DialogContent, DialogActions, DialogTitle, IconButton, Box, Typography, Button } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import { db } from '../firebase'
import { useAuth } from '../context/AuthContext'

function JobViewModal(props) {

   const { userData } = useAuth();

    // useEffect(()=>{
    //     db.collection("notificaion").doc().get()
    // })
   
    return (
        <Dialog open={!!Object.keys(props.data).length} fullWidth>
            
                <DialogTitle>
                <Box display="flex" justifyContent="space-between" alignItems="center"  color="primary.main">
                    Details :{props.data.id}
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
                    <Typography variant="h5"><a href={props.data.url} target="_blank">{props.data.url}</a></Typography>
                </Box>

                <Box display="flex"  mb={1}>
                   <Typography variant="h5">Apply Link:</Typography>
                   <Typography variant="h5"><a href={props.data.link} target="_blank">{props.data.link}</a></Typography>
                </Box>

                <Box display="flex" mb={1}>
                   <Typography variant="h5">Deadline :</Typography>
                   <Typography variant="h5">{props.data.deadline}</Typography>
                </Box>

               </Box>
            </DialogContent>

            <DialogActions>
           {userData && userData.isStudent === true ?  <Button variant="outlined" color="secondary" onClick={props.onApplyIntern}>
           Apply
            </Button> : "sign in to apply this post" }
            </DialogActions>
          
        </Dialog>
    )
}

export default JobViewModal
