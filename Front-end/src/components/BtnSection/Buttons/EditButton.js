import { Button } from '@mui/material'
import React from 'react'
import EditDialog from '../../DialogBox/EditDialog';

function EditButton(props) {

    const btnStyle = {
        height:"42px",
        width:"187px",
        color:"white",
    };
    
    const [openEDIT, setOpenEDIT] = React.useState(false);

    const handleClickOpenEDIT = () => {
        setOpenEDIT(true);
    };

    const handleCloseEDIT = () => {
        setOpenEDIT(false);
    }

    return (
        <>
            <Button id="EDIT" style={{ ...btnStyle }} onClick={handleClickOpenEDIT} disabled={props.selection_model.editBtn}>EDIT</Button>
            <EditDialog 
            open={openEDIT} 
            handleClose={handleCloseEDIT} 
            states={props.states} 
            selection_model={props.selection_model}
            rowsState={props.rowsState}/>
        </>
    )
}

export default EditButton