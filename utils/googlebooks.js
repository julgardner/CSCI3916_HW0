const axios = require('axios')

module.exports = async (phrase) => {
    const results = await axios.get('https://www.googleapis.com/books/v1/volumes', {
        params: {
            format: 'json',
            q: `${phrase}`
        }
    })

    var resultsObj = {};
    resultsObj.data = results.data;
    resultsObj.status = results.status;
    resultsObj.statusText = results.statusText;
    resultsObj.headers = results.headers;
    resultsObj.requestHeader = results.config.headers;
    return JSON.stringify(resultsObj);
}

/*  console.log(results.data);
    console.log(results.status);
    console.log(results.statusText);
    console.log(results.headers);

        const results = await axios({
        method: 'get',
        url: 'https://www.googleapis.com/books/v1/volumes',
        params: {
            format: 'json',
            q: `${phrase}`,
        },
    })*/
