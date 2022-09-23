import axios from 'axions'

const api = axions.create({
    baseURL: 'http://127.0.0.1:3333',
    headers: {
        'Content-Type': 'application/json',
    },
})

export default api