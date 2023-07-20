const axios = require('axios');

let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://eshop-iota-azure.vercel.app/api/v2/user/getuser',
    headers: {}
};

axios.request(config)
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        console.log(error);
    });
