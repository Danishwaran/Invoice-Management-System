import axios from 'axios';

async function GetInvoices(setFunction) {
    console.log("inside getInvoice");

    const response = await axios.get('http://localhost:8080/H2H_Internship_Project/InvoiceList')

    console.log(response.data);
    setFunction(response.data);
}

export default GetInvoices
