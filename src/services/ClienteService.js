import api from '../lib/axios'

export default {
    obterClientes() {
        return api.get('/clientes')
    },
    agregarCliente() {
        return api.post('/clientes', data)
    }
}