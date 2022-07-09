import { Button } from '@mui/material'
import React from 'react'
import AddDialog from '../../DialogBox/AddDialog';

function AddButton(props) {

    const btnStyle = {
        height:"42px",
        width:"187px",
        color:"white",
    };
    
    const [openADD, setOpenADD] = React.useState(false);

    const handleClickOpenADD = () => {
        setOpenADD(true);
    };

    const handleCloseADD = () => {
        setOpenADD(false);
    }

    return (
        <>
            <Button id="ADD" style={{ ...btnStyle }} onClick={handleClickOpenADD}>ADD</Button>
            <AddDialog open={openADD} handleClose={handleCloseADD} states={props.states}/>
        </>
    )
}

export default AddButton
