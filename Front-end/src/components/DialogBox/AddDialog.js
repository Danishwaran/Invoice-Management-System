import { Dialog, DialogActions, DialogContent, DialogTitle, Grid } from '@mui/material'
import React from 'react'
import DatePickerField from '../BtnSection/TextFields/DatePickerField';
import Field from '../BtnSection/TextFields/Field';
import DialogButtons from "../BtnSection/Buttons/DialogButtons";
import Addinvoices from '../Functions/Addinvoices';

function DateExtraction(date)
{
    if(date === "")
    {
        return "0000-00-00";
    }
    return date.toISOString().slice(0,10);
}

function AddInvoice(handleClose,states)
{
    const Invoice = getInvoice(states);
    console.log(Invoice);
    Addinvoices(Invoice);
    
    handleClose();
    setInvoice(states);
}

function GridRow(props) {
    return (
        <Grid container item columnSpacing={{xs:3}}>
            <Grid item xs={3}>
                { props.one === "Baseline Create Date" && <DatePickerField label={props.one} value={props.states.Baseline_Create_Date}/> }
                { props.one === "Business Code" && <Field label={props.one} state={props.states.Business_Code}/> }
                { props.one === "Invoice Currency" && <Field label={props.one} state={props.states.Invoice_Currency}/> }
                { props.one === "Document id" && <Field label={props.one} state={props.states.Doc_Id}/> }
            </Grid>
            <Grid item xs={3}>
                { props.two === "Posting Date" && <DatePickerField label={props.two} value={props.states.Posting_Date}/> }
                { props.two === "Customer Number" && <Field label={props.two} state={props.states.Customer_Number}/> }
                { props.two === "Document type" && <Field label={props.two} state={props.states.Document_Type}/> }
                { props.two === "Customer Payment Terms" && <Field label={props.two} state={props.states.Cust_Payment_Terms}/> }
            </Grid>
            <Grid item xs={3}>
                { props.three === "Document Create Date" && <DatePickerField label={props.three} value={props.states.Document_Create_Date}/>}
                { props.three === "Clear Date" && <DatePickerField label={props.three} value={props.states.Clear_Date}/> }
                { props.three === "Posting Id" && <Field label={props.three} state={props.states.Posting_Id}/> }
                { props.three === "Invoice Id" && <Field label={props.three} state={props.states.Invoice_Id}/> }
            </Grid>
            <Grid item xs={3}>
                { props.four === "Due Date" && <DatePickerField label={props.four} value={props.states.Due_in_Date}/> }
                { props.four === "Business Year" && <Field label={props.four} state={props.states.Business_Year}/> }
                { props.four === "Total open amount" && <Field label={props.four} state={props.states.Total_Open_Amount}/> }
            </Grid>
        </Grid>
    );
}

function getInvoice(states)
{
    const invoice = {
        business_code:states.Business_Code.value,
        cust_number:states.Customer_Number.value,
        clear_date:DateExtraction(states.Clear_Date.value),
        buisness_year:states.Business_Year.value,
        doc_id:states.Doc_Id.value,
        posting_date:DateExtraction(states.Posting_Date.value),
        document_create_date:DateExtraction(states.Document_Create_Date.value),
        due_in_date:DateExtraction(states.Due_in_Date.value),
        invoice_currency:states.Invoice_Currency.value,
        document_type:states.Document_Type.value,
        posting_id:states.Posting_Id.value,
        total_open_amount:states.Total_Open_Amount.value,
        baseline_create_date:DateExtraction(states.Baseline_Create_Date.value),
        cust_payment_terms:states.Cust_Payment_Terms.value,
        invoice_id:states.Invoice_Id.value,
    }
    return invoice;
}

function setInvoice(states)
{
    states.Business_Code.setFunction(""); 
    states.Customer_Number.setFunction("");  
    states.Clear_Date.setFunction(new Date());
    states.Business_Year.setFunction(""); 
    states.Doc_Id.setFunction("");
    states.Posting_Date.setFunction(new Date());
    states.Document_Create_Date.setFunction(new Date());
    states.Due_in_Date.setFunction(new Date());
    states.Invoice_Currency.setFunction("");  
    states.Document_Type.setFunction("");  
    states.Posting_Id.setFunction("");  
    states.Total_Open_Amount.setFunction("");  
    states.Baseline_Create_Date.setFunction(new Date());
    states.Cust_Payment_Terms.setFunction("");  
    states.Invoice_Id.setFunction("");  
}

function AddDialog(props) {
    const {open , handleClose , states} = props;
    return (
        <Dialog open={open} onClose={handleClose} maxWidth={"100%"}>
            <DialogContent style={{backgroundColor:"#2a3e4c"}}>
                <DialogTitle style={{color:"white"}}>Add</DialogTitle>
                <DialogContent>
                    <Grid container rowSpacing={4}>
                        
                        <GridRow one="Business Code" two="Customer Number" three="Clear Date" four="Business Year" states={states}/>
                        <GridRow one="Document id" two="Posting Date" three="Document Create Date" four="Due Date" states={states}/>
                        <GridRow one="Invoice Currency" two="Document type" three="Posting Id" four="Total open amount" states={states}/>
                        <GridRow one="Baseline Create Date" two="Customer Payment Terms" three="Invoice Id" four="none" states={states}/>
                        
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <DialogButtons value="ADD" handleClose={() => AddInvoice(handleClose,states)}/>
                    <DialogButtons value="CLOSE" handleClose={handleClose}/>
                </DialogActions>
            </DialogContent>
        </Dialog>  
    )
}

export default AddDialog

