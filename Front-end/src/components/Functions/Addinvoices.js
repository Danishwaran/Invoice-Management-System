import axios from 'axios';
import ReactDOM from 'react-dom';
import SnackBar from '../Notification/SnackBar';

function snackbar(status,message)
{
  ReactDOM.render(
    <SnackBar status={status} message={message}/>,
    document.getElementById('notifier')
  );
}

async function Addinvoices(Invoice) {
    console.log("inside AddInvoice");
    axios.post(`http://localhost:8080/H2H_Internship_Project/AddInvoice`, { ...Invoice })
      .then(res => {
        console.log(res.status);
        snackbar(res.status,"ADD Successful!");
      }).catch((error) => { snackbar(error.response.status,"Invalid Detail!");})
}

export default Addinvoices
