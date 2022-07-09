import { Button } from '@mui/material'
import React from 'react'

function PredictButton() {

    const btnStyle = {
        height:"42px",
        width:"187px",
        color:"white",
    };

    return (
        <>
            <Button id="Predict" style={{ ...btnStyle }}>PREDICT</Button>
        </>
    )
}

export default PredictButton