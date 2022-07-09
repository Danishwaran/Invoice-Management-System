import { Dialog, DialogActions, DialogContent, DialogTitle, Grid} from '@mui/material'
import React from 'react'
import Field from '../BtnSection/TextFields/Field';
import DialogButtons from '../BtnSection/Buttons/DialogButtons';
import DatePickerField from '../BtnSection/TextFields/DatePickerField';

function GridRow(props){
    return (
        <Grid container item columnSpacing={1}>
            <Grid container item xs={6} rowSpacing={1}>
                <DialogTitle style={{color:"white"}}>{props.one}</DialogTitle>
                <Grid item xs={12} >
                    {props.one === "Clear Date" ? 
                    <DatePickerField label={props.one} value={props.states.Clear_Date}/> 
                    : 
                    <DatePickerField label={props.one} value={props.states.Baseline_Create_Date}/> }
                </Grid>
                <Grid item xs={12} >
                    {props.one === "Clear Date" ? 
                    <DatePickerField label={props.one} value={props.states.Clear_Date}/> 
                    : 
                    <DatePickerField label={props.one} value={props.states.Baseline_Create_Date}/> }
                </Grid>
                
            </Grid>
            <Grid container item xs={6} rowSpacing={1}>
                <DialogTitle style={{color:"white"}}>{props.two}</DialogTitle>
                {props.two === "Invoice Currency" ? 
                    <><Grid item xs={12}>
                        <Field label={props.two} state={props.states.Invoice_Currency}/>
                    </Grid>
                    <Grid item xs={12}>
                        <></>
                    </Grid>
                    </> 
                    : 
                    <><Grid item xs={12}>
                        <DatePickerField label={props.two} value={props.states.Due_in_Date}/>
                    </Grid>
                    <Grid item xs={12}>
                        <DatePickerField label={props.two} value={props.states.Due_in_Date}/>
                    </Grid>
                    </> }
            </Grid>
        </Grid>
    );

}

function AnalyticViewDialog(props) {
    const {open , handleClose , states} = props;
    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{sx:{maxWidth:"780px"}}}>
            <DialogContent style={{backgroundColor:"#2a3e4c"}}>
                <DialogTitle style={{color:"white",fontSize:"25px"}}>Analytics View</DialogTitle>
                <DialogContent>
                    <Grid container rowSpacing={2} >
                        
                        <GridRow one="Clear Date" two="Due Date" states={states} />
                        <GridRow one="Baseline Create Date" two="Invoice Currency" states={states}/>
                        
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <DialogButtons value="SUBMIT" handleClose={handleClose}/>
                    <DialogButtons value="CLOSE" handleClose={handleClose}/>
                </DialogActions>
            </DialogContent>
        </Dialog>
        
    )
}

export default AnalyticViewDialog