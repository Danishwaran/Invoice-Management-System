import React from 'react'
import {DataGrid} from "@mui/x-data-grid"

const columns = [
    { field: 'sl_no', headerName: 'sl no', width: 80 },
    { field: 'business_code', headerName: 'Business Code', width: 110 },
    { field: 'cust_number', headerName: 'Customer Number', width: 110 },
    { field: 'clear_date', headerName: 'Clear Date', width: 100 },
    { field: 'buisness_year', headerName: 'Business year', width: 100 },
    { field: 'doc_id', headerName: 'Document Id', width: 115 },
    { field: 'posting_date', headerName: 'Posting Date', width: 110 },
    { field: 'document_create_date', headerName: 'Document Create Date', width: 110 },
    { field: 'due_in_date', headerName: 'Due Date', width: 110 },
    { field: 'invoice_currency', headerName: 'Invoice Currency', width: 110 },
    { field: 'document_type', headerName: 'Document Type', width: 110 },
    { field: 'posting_id', headerName: 'Posting Id', width: 90 },
    { field: 'total_open_amount', headerName: 'Total Open Amount', width: 115 },
    { field: 'baseline_create_date', headerName: 'Baseline Create Date', width: 110 },
    { field: 'cust_payment_terms', headerName: 'Customer Payment Terms', width: 110 },
    { field: 'invoice_id', headerName: 'Invoice Id', width: 120 },
  ];

function InvoiceGrid(props) {
    const [pageSize , setPageSize] = React.useState(10);

    const {selectionModel, setSelectionModel} = props.selection_model;

    return (
      <div style={{height:"510px"}}>
            <DataGrid 
                columns={columns}
                rows={props.rows}

                getRowId={(row) => row.sl_no}

                pageSize={pageSize}
                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                rowsPerPageOptions={[5, 10, 15, 20, 25]}
                pagination

                checkboxSelection={true}
                disableSelectionOnClick={true}
                disableColumnMenu={true}

                headerHeight={80}
                rowHeight={35}

                onSelectionModelChange={(newSelectionModel) => {
                  setSelectionModel(newSelectionModel);
                }}
                selectionModel={selectionModel}
                sx={{
                  border:"none",
                  backgroundColor:"#283d4a",
                  
                  "& .MuiDataGrid-columnHeaders": {
                    color:"white",
                    fontSize:"17px",
                  },
                  "& .MuiDataGrid-columnSeparator": {
                    display: "none",
                  },
                  
                  "& .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root": {
                    color:"white"
                  },
                  "& .MuiDataGrid-row": {
                    color:"white",
                  },
                  "& .MuiDataGrid-columnHeaderTitle": {
                    overflow:"visible",
                    whiteSpace:"break-spaces",
                    lineHeight:"1.2",
                  },
                  "& .css-194a1fa-MuiSelect-select-MuiInputBase-input.MuiSelect-select":{
                    color:"white",
                  },
                  "& .css-zylse7-MuiButtonBase-root-MuiIconButton-root": {
                    color:"white",
                  },
                  "& .MuiDataGrid-selectedRowCount": {
                    color:"white",
                  }
                }}
            />
      </div>
        
    )
}

export default InvoiceGrid
