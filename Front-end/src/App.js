import React from 'react';
import './App.css';
import LogoSection from './components/LogoSection/LogoSection';
import BtnSection from './components/BtnSection/BtnSection';
import InvoiceGrid from "./components/DataGridSection/InvoiceGrid";
import { useEffect } from 'react';
import GetInvoices from './components/Functions/GetInvoices';

function App() {

  const [rows,setRows] = React.useState([]);

  useEffect(() => {GetInvoices(setRows)},[])

  

  const rowsState = {
    rows:rows,
    setRowsFunc:setRows,
  }

  const [business_code,setBusiness_code] = React.useState("");
  const [customer_number,setCustomer_Number] = React.useState("");
  const [clear_date,setClear_Date] = React.useState(new Date());
  const [business_year,setBusiness_Year] = React.useState("");
  const [doc_id,setDoc_Id] = React.useState("");
  const [posting_date,setPosting_Date] = React.useState(new Date());
  const [document_create_date,setDocument_Create_Date] = React.useState(new Date());
  const [due_in_date,setDue_in_Date] = React.useState(new Date());
  const [invoice_currency,setInvoice_Currency] = React.useState("");
  const [document_type,setDocument_Type] = React.useState("");
  const [posting_id,setPosting_Id] = React.useState("");
  const [total_open_amount,setTotal_Open_Amount] = React.useState("");
  const [baseline_create_date,setBaseline_Create_Date] = React.useState(new Date());
  const [cust_payment_terms,setCust_Payment_Terms] = React.useState("");
  const [invoice_id,setInvoice_Id] = React.useState("");

  const [selectionModel, setSelectionModel] = React.useState([]);
  const [editBtn,setEditBtn] = React.useState(true);
  const [deleteBtn,setDeleteBtn] = React.useState(true);

  const selection_model = {
    selectionModel:selectionModel,
    setSelectionModel:setSelectionModel,
    editBtn:editBtn,
    setEditBtn:setEditBtn,
    deleteBtn:deleteBtn,
    setDeleteBtn:setDeleteBtn,
  }


  useEffect(() => {
    console.log(selectionModel.length)
    if(selectionModel.length === 1)
    {
      setEditBtn(false)
    }
    else
    {
      setEditBtn(true)
    }

    if(selectionModel.length > 0)
    {
      setDeleteBtn(false)
    }
    else
    {
      setDeleteBtn(true)
    }
  },[selectionModel]);

  const states = {
    Business_Code: {
      value:business_code,
      setFunction:setBusiness_code,
    },
    Customer_Number: {
      value:customer_number,
      setFunction:setCustomer_Number,
    },
    Clear_Date: {
      value:clear_date,
      setFunction:setClear_Date,
    },
    Doc_Id: {
      value:doc_id,
      setFunction:setDoc_Id,
    },
    Business_Year: {
      value:business_year,
      setFunction:setBusiness_Year,
    },
    Posting_Date: {
      value:posting_date,
      setFunction:setPosting_Date,
    },
    Document_Create_Date: {
      value:document_create_date,
      setFunction:setDocument_Create_Date,
    },
    Due_in_Date: {
      value:due_in_date,
      setFunction:setDue_in_Date,
    },
    Invoice_Currency: {
      value:invoice_currency,
      setFunction:setInvoice_Currency,
    },
    Document_Type: {
      value:document_type,
      setFunction:setDocument_Type,
    },
    Posting_Id: {
      value:posting_id,
      setFunction:setPosting_Id,
    },
    Total_Open_Amount: {
      value:total_open_amount,
      setFunction:setTotal_Open_Amount,
    },
    Baseline_Create_Date: {
      value:baseline_create_date,
      setFunction:setBaseline_Create_Date,
    },
    Cust_Payment_Terms: {
      value:cust_payment_terms,
      setFunction:setCust_Payment_Terms,
    },
    Invoice_Id: {
      value:invoice_id,
      setFunction:setInvoice_Id,
    },
  }

  return (
    <div id="App">
      <div id="logoSection">
        <LogoSection/>
      </div>
      <div id="btnSection">
        <BtnSection states={states} rowsState={rowsState} selection_model={selection_model}/>
      </div>
      <div id="dataGrid">
        <InvoiceGrid rows={rows} selection_model={selection_model}/>
      </div>
      <div id="footer">
        <div id="notifier"></div>
        <div id="copyright">
          <p><a href="privacy policy">Privacy Policy</a>| &copy; 2022 HighRadius Corporation. All rights reserved.</p>
        </div>
      </div>
      
    </div>
  );
}

export default App;
