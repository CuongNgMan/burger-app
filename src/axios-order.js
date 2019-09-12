import axios from 'axios';

const axios_order_instance = axios.create({
  baseURL: 'https://react-sample-burger.firebaseio.com/'
});


export default axios_order_instance;