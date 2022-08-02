import http from '../../helpers/AxiosHelper/AxiosHelper'

export default {
    get() {
        return http.get('/filters')
    }
}
