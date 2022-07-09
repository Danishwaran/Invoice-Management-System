import React from 'react'
import {TextField} from "@mui/material";
import GetInvoices from '../../Functions/GetInvoices';
import SearchInvoices from '../../Functions/SearchInvoices';
//import InvoiceGrid from "../DataGridSection/InvoiceGrid"


function SearchTextField(props) {

    function SearchFunction(data,setFunction)
    {
        console.log(data);
        if(data === "")
        {
            GetInvoices(setFunction);
        }
        else
        {
            SearchInvoices(setFunction,data);
        }
    }

    const fieldStyle = {
        margin:"0.7%",
        backgroundColor:"white",
        color:"white",
        borderRadius:"10px",
        width:"230px",
    };  

    return (
        <TextField 
        id="search-field" 
        label="Search Customer Id" 
        variant='filled' 
        size='small' 
        onChange = {(Event) => {
            SearchFunction(Event.target.value,props.setRowsFunc);
        }}
        style={{...fieldStyle}}/>
    )
}

export default SearchTextField
