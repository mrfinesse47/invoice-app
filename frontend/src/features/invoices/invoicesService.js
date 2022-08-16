import axios from 'axios';

const API_URL = '/api/invoices/';

//  Get invoices
const getInvoices = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

const invoiceService = {
  getInvoices,
};

export default invoiceService;
