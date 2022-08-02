import http from '../../helpers/AxiosHelper/AxiosHelper'

export default {
    get(params) {
        return http.get('/products', { params: { ...params, ...{ '_limit': process.env.REACT_APP_DEFAULT_LIMIT } } })
    }
}
