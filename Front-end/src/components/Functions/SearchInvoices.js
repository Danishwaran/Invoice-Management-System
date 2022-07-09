import axios from 'axios';

function SearchInvoices(setFunction,value) {
    console.log("inside SearchInvoice");
    axios.post(`http://localhost:8080/H2H_Internship_Project/SearchInvoice`, { cust_number:value })
      .then(res => {
        console.log(res.status);
        console.log(res.data);
        setFunction(res.data)
      })
}

export default SearchInvoices
