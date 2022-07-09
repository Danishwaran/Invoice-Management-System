import axios from 'axios';

function AdvSearchInvoices(setFunction,value) {
    console.log("inside AdvSearchInvoice");
    axios.post(`http://localhost:8080/H2H_Internship_Project/AdvanceSearchInvoice`, { ...value })
      .then(res => {
        console.log(res.status);
        console.log(res.data);
        setFunction(res.data);
      })
}

export default AdvSearchInvoices
