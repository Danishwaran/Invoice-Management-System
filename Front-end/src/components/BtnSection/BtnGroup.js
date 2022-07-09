import React from 'react'
import {ButtonGroup} from "@mui/material";
import AddButton from './Buttons/AddButton';
import EditButton from './Buttons/EditButton';
import DeleteButton from './Buttons/DeleteButton';
import PredictButton from './Buttons/PredictButton';
import AdvSearchButton from './Buttons/AdvSearchButton';
import AnalyticViewButton from './Buttons/AnalyticViewButton';

function BtnGroup(props) {
    return (
        <div id={props.details.id}>
            <ButtonGroup variant={props.details.type} size='large'>
                {props.details.one === "ADD" ? <AddButton states={props.states}/> : <PredictButton/>}
                {props.details.two === "EDIT" ? <EditButton states={props.states} selection_model={props.selection_model} rowsState={props.rowsState}/> : <AnalyticViewButton states={props.states}/>}
                {props.details.three === "DELETE" ? <DeleteButton selection_model={props.selection_model} rowsState={props.rowsState}/> : <AdvSearchButton states={props.states} setRowsFunc={props.rowsState.setRowsFunc}/>}
            </ButtonGroup>
        </div>
    );
}

export default BtnGroup;
