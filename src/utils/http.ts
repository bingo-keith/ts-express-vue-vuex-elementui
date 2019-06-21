import axios from 'axios'

let service: any = {}

service = axios.create({
    baseURL: '/api',
    timeout: 50000,
});

service.interceptors.request.use((config: any) => {
    console.log(config)
    return config
}, (error: any) => {
    console.error('error:', error)
    Promise.reject(error)
})

service.interceptors.response.use((response: any) => {
    return response
}, (error: any) => {
    console.log('error:' + error)
})

export default service
