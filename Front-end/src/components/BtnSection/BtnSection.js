import React from 'react';
import BtnGroup from './BtnGroup';
import SearchTextField from './TextFields/SearchTextField';
import RefreshButton from "./Buttons/RefreshButton"

function BtnSection(props) {
    const group1 = {
        type:"text",
        id:"component-advBtns",
        one:"PREDICT",
        two:"ANALYTICS VIEW",
        three:"ADVANCE SEARCH",
    };
    const group2 = {
        type:"outlined",
        id:"component-crudBtns",
        one:"ADD",
        two:"EDIT",
        three:"DELETE",
    };
    return (
        <div id="conponents-BtnSection">
            <BtnGroup details={group1} states={props.states} rowsState={props.rowsState}/>

            <RefreshButton setRowsFunc={props.rowsState.setRowsFunc}/>

            <SearchTextField setRowsFunc={props.rowsState.setRowsFunc}/>

            <BtnGroup details={group2} states={props.states} selection_model={props.selection_model} rowsState={props.rowsState}/>
            
        </div>
        
    )
}

export default BtnSection
