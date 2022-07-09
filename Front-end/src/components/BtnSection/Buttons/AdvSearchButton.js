import { Button } from '@mui/material'
import React from 'react'
import AdvSearchDialog from '../../DialogBox/AdvSearchDialog.js';

function AdvSearchButton(props) {

    const btnStyle = {
        height:"42px",
        width:"187px",
        color:"white",
    };
    
    const [openADVS, setOpenADVS] = React.useState(false);

    const handleClickOpenADVS = () => {
        setOpenADVS(true);
    };

    const handleCloseADVS = () => {
        setOpenADVS(false);
    }

    return (
        <>
            <Button id="AdvSearch" style={{ ...btnStyle }} onClick={handleClickOpenADVS}>ADVANCE SEARCH</Button>
            <AdvSearchDialog open={openADVS} handleClose={handleCloseADVS} states={props.states} setFunction={props.setRowsFunc} />
        </>
    )
}

export default AdvSearchButton