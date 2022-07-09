import axios from 'axios';
import ReactDOM from 'react-dom';
import SnackBar from '../Notification/SnackBar';
import GetInvoices from './GetInvoices';

function snackbar(status,message)
{
  console.log("snackbar");
  ReactDOM.render(
    <SnackBar status={status} message={message}/>,
    document.getElementById('notifier')
  );
}

function DeleteInvoices(selection_model,rowsState) {
    console.log("inside DeleteInvoice");
    const data = selection_model.selectionModel;
    console.log(data);
    axios.post(`http://localhost:8080/H2H_Internship_Project/DeleteInvoice`,data,{ headers: {'Content-Type': 'application/x-www-form-urlencoded'} })
      .then(res => {
        console.log(res.status);
        selection_model.setSelectionModel([]);
        GetInvoices(rowsState.setRowsFunc);
        snackbar(res.status,"DELETE Successful!");
      }).catch((error) => { snackbar(error.response.status,"Error Occured!");})
}

export default DeleteInvoices
