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

function EditInvoices(value,selection_model,rowsState) {
    console.log("inside EditInvoice");
    axios.post(`http://localhost:8080/H2H_Internship_Project/EditInvoice`, { ...value,sl_no:selection_model.selectionModel[0] })
      .then(res => {
        console.log(res.status);
        snackbar(res.status,"EDIT Successful!");
        GetInvoices(rowsState.setRowsFunc);
      }).catch((error) => { snackbar(error.response.status,"Invalid Detail!");})
}

export default EditInvoices
