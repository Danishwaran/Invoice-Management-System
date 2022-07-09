import React from "react"
import {TextField} from "@mui/material"


function Field(props) {
    return <TextField 
    label={props.label}
    onChange={(Event) => props.state.setFunction(Event.target.value)}
    variant="filled" 
    style={{width:"330px",color:"white",backgroundColor:"white",borderRadius:"7px"}}
    />
}

export default Field