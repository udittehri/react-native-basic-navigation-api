function callBackendPolice(url, type, body) {
    let base = 'localhost'
    let address = `${base}${url}`

    fetch(address, {
        method: type,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
        .then((response) => response.json())
        .then((json) => {
            console.log(`Url : ${address} \n Body : ${body} \n Response : ${json} `);
            return json;
        })
        .catch((error) => {
            console.error(`Error : ${error} `)
            return error;
        })
        .finally(() => {
        });

}

exports.callBackendPolice = new callBackendPolice()