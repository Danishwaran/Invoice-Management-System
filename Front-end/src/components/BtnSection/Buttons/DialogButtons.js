import React from 'react'
import { Button } from '@mui/material'

function DialogButtons(props) {
    return (<Button variant='outlined' 
        onClick={props.handleClose} 
        style={{color:"white",width:"50%",borderColor:"white"}}>
            {props.value}
        </Button>  
    )
}

export default DialogButtons
