import { Alert } from '@mui/material';
import { Snackbar } from '@mui/material';
import React from 'react'

function SnackBar(props) {
    const [open, setOpen] = React.useState(true);
    
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
    };
    console.log("snackbar");
    return (
        <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
            {props.status === 200 ? 
                <Alert variant='filled' onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    {props.message}
                </Alert>
                :
                <Alert variant='filled' onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    {props.message}
                </Alert>
                }
        
      </Snackbar>
    )
}

export default SnackBar
