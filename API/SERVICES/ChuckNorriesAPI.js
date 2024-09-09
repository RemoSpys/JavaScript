import axios from 'axios'

const chuckNorrisAPI = axios.create({
    baseURL: 'https://api.chucknorris.io/jokes',
    headers: {
        'Authorization': 'asasdasd asfghfh'
    }
})

export default chuckNorrisAPI