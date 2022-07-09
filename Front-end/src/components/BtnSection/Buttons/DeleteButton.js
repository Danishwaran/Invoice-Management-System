import React from 'react'
import DeleteDialog from '../../DialogBox/DeleteDialog';
import {Button} from "@mui/material";

function DeleteButton(props) {
    const btnStyle = {
        height:"42px",
        width:"187px",
        color:"white",
    };
    
    const [openDEL, setOpenDEL] = React.useState(false);

    const handleClickOpenDEL = () => {
        setOpenDEL(true);
    };

    const handleCloseDEL = () => {
        setOpenDEL(false);
    }

    return (
        <>
            <Button id="DELETE" style={{ ...btnStyle }} onClick={handleClickOpenDEL} disabled={props.selection_model.deleteBtn}>DELETE</Button>
            <DeleteDialog open={openDEL} handleClose={handleCloseDEL} selection_model={props.selection_model} rowsState={props.rowsState}/>
        </>
    )
}

export default DeleteButton
