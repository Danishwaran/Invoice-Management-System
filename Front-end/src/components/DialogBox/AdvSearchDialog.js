import { Dialog, DialogActions, DialogContent, DialogTitle, Grid} from '@mui/material'
import React from 'react'
import Field from '../BtnSection/TextFields/Field';
import DialogButtons from '../BtnSection/Buttons/DialogButtons';
import AdvSearchInvoices from '../Functions/AdvSearchInvoices';

function GridRow(props){
    return (
        <Grid container item columnSpacing={1}>
            <Grid item xs={6}>
                { props.one === "Document id" ? 
                    <Field label={props.one} state={props.states.Doc_Id}/>  
                    :
                    <Field label={props.one} state={props.states.Customer_Number}/> 
                }
            </Grid>
            <Grid item xs={6}>
                { props.two === "Invoice Id" ? 
                    <Field label={props.two} state={props.states.Invoice_Id}/>  
                    :
                    <Field label={props.two} state={props.states.Business_Year}/> 
                }
            </Grid>
        </Grid>
    );

}

function AdvSearchFunction(handleClose,states,setFunction)
{
    const value = getSearchValue(states);
    console.log(value);
    AdvSearchInvoices(setFunction,value);
    handleClose();
    setSearchValue(states);
}

function getSearchValue(states)
{
    console.log(states);
    const value = {
        doc_id:states.Doc_Id.value === "" ? null : states.Doc_Id.value,
        invoice_id:states.Invoice_Id.value === "" ? null : states.Invoice_Id.value,
        cust_number:states.Customer_Number.value === "" ? null : states.Customer_Number.value,
        buisness_year:states.Business_Year.value === "" ? null : states.Business_Year.value,
    }
    return value;
}

function setSearchValue(states)
{
    states.Doc_Id.setFunction("");
    states.Invoice_Id.setFunction("");
    states.Customer_Number.setFunction("");
    states.Business_Year.setFunction("");
}

function AdvSearchDialog(props) {
    const {open , handleClose , states , setFunction} = props;
    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{sx:{maxWidth:"780px"}}}>
            <DialogContent style={{backgroundColor:"#2a3e4c"}}>
                <DialogTitle style={{color:"white",fontSize:"30px"}}>Advance Search</DialogTitle>
                <DialogContent>
                    <Grid container rowSpacing={2}>
                        
                        <GridRow one="Document id" two="Invoice Id" states={states}/>
                        <GridRow one="Customer Number" two="Business Year" states={states}/>
                        
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <DialogButtons value="SEARCH" handleClose={() => AdvSearchFunction(handleClose,states,setFunction)}/>
                    <DialogButtons value="CLOSE" handleClose={handleClose}/>
                </DialogActions>
            </DialogContent>
        </Dialog>
        
    )
}

export default AdvSearchDialog