import { Button } from '@mui/material'
import React from 'react'
import AnalyticViewDialog from '../../DialogBox/AnalyticViewDialog.js';

function AnalyticViewButton(props) {

    const btnStyle = {
        height:"42px",
        width:"187px",
        color:"white",
    };
    
    const [openAnalyticView, setOpenAnalyticView] = React.useState(false);

    const handleClickOpenAnalyticView = () => {
        setOpenAnalyticView(true);
    };

    const handleCloseAnalyticView = () => {
        setOpenAnalyticView(false);
    }

    return (
        <>
            <Button id="AnalyticView" 
            style={{ ...btnStyle }} 
            onClick={handleClickOpenAnalyticView}>
                ANALYTICS VIEW
            </Button>
            <AnalyticViewDialog open={openAnalyticView} handleClose={handleCloseAnalyticView} states={props.states}/>
        </>
    )
}

export default AnalyticViewButton