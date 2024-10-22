import axios from 'axios';

function apiClient(){ 
    axios.create({  
    baseURL: 'http://localhost:5000', // Replace with your API base URL  
    });
}

export default apiClient;