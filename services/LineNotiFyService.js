'use strict'


const { default: axios } = require("axios");
const dotenv = require('dotenv');
const qs = require('qs');

dotenv.config();

async function SendLineNotify(message) {

    const data = qs.stringify({ message });

    await axios.post("https://notify-api.line.me/api/notify", data, {
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            Authorization: 'Bearer ' + process.env.LineToken
        }
    });

    return true;
}
module.exports = {
    SendLineNotify
}