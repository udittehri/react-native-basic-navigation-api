import axios from 'axios'

const baseURL = 'https://awesomemee.herokuapp.com/api'

export function callGetPolice(url) {

    let address = `${baseURL}${url}`

    return axios.get(address)
    // .then((response) => {
    //     console.error(`Response  : ${response.data} `)
    //     return response.data
    // })
    // .catch((error) => {
    //     console.error(`Error : ${error} `)
    //     return error;
    // })

}

export function callPostPolice(url, body) {
    let address = `${baseURL}${url}`

    return axios.get(address, body)
        .then((response) => {
            console.error(`Response  : ${response.data} `)
            return response.data
        })
        .catch((error) => {
            console.error(`Error : ${error} `)
            return error;
        })
}
