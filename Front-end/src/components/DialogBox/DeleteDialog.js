import { Dialog, DialogActions, DialogContent, DialogTitle, DialogContentText } from '@mui/material'
import React from 'react'
import DialogButtons from '../BtnSection/Buttons/DialogButtons';
import DeleteInvoices from '../Functions/DeleteInvoices';

function DeleteFunction(rowsState,selection_model,handleClose)
{
    DeleteInvoices(selection_model,rowsState);
    handleClose();
}

function DeleteDialog(props) {
    const {open , handleClose , selection_model , rowsState} = props;
    return (
        <Dialog open={open} onClose={handleClose} maxWidth={"100%"}>
            <DialogContent style={{backgroundColor:"#2a3e4c"}}>
                <DialogTitle style={{color:"white", fontSize:"30px"}}>Delete Records ?</DialogTitle>
                <DialogContentText style={{color:"white",fontSize:"20px",marginBottom:"20px"}}>
                    Are you sure you want to delete these record[s] ?
                </DialogContentText>
                <DialogActions>
                    <DialogButtons value="CLOSE" handleClose={handleClose}/>
                    <DialogButtons value="DELETE" handleClose={() => DeleteFunction(rowsState,selection_model,handleClose)}/>   
                </DialogActions>
            </DialogContent>
        </Dialog>
        
    )
}

export default DeleteDialog