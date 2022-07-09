import React from 'react'
import "../../component.css";
import Refresh from '../../Functions/Refresh';


function RefreshButton(props) {
    return (
        <div id='refresh' onClick={()=> Refresh(props.setRowsFunc)}>&#10227;</div>
    )
}

export default RefreshButton
