import { Dialog, DialogActions, DialogContent, DialogTitle, Grid } from '@mui/material'
import React from 'react'
import Field from '../BtnSection/TextFields/Field';
import DialogButtons from '../BtnSection/Buttons/DialogButtons';
import EditInvoices from '../Functions/EditInvoices';

function EditInvoice(handleClose,states,rowsState,selection_model)
{
    const value = getEditValue(states);
    console.log(value);
    EditInvoices(value,selection_model,rowsState);
    setEditValue(states);
    handleClose();
}

function getEditValue(states)
{
    const value = {
        invoice_currency:states.Invoice_Currency.value,
        cust_payment_terms:states.Cust_Payment_Terms.value,
    }
    return value;
}

function setEditValue(states)
{
    
    states.Invoice_Currency.setFunction("");
    states.Cust_Payment_Terms.setFunction("");

}

function EditDialog(props) {
    const {open , handleClose , states , selection_model , rowsState} = props;
    return (
        <Dialog open={open} onClose={handleClose} maxWidth={"100%"}>
            <DialogContent style={{backgroundColor:"#2a3e4c"}}>
                <DialogTitle style={{color:"white"}}>EDIT</DialogTitle>
                <DialogContent>
                    <Grid container spacing={2}>
                        
                        <Grid item xs={6}>
                            <Field label="Invoice Currency" state={states.Invoice_Currency}/> 
                        </Grid>
                        <Grid item xs={6}>
                            <Field label="Customer Payment Terms" state={states.Cust_Payment_Terms}/>
                        </Grid> 
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <DialogButtons value="EDIT" handleClose={() => EditInvoice(handleClose,states,rowsState,selection_model)}/>
                    <DialogButtons value="CLOSE" handleClose={handleClose}/>
                </DialogActions>
            </DialogContent>
        </Dialog>
        
    )
}

export default EditDialog