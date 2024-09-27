import api from '../lib/axios'

export default {
    obtenerClientes() {
        return api.get('/clientes')
    },
    agregarCliente() {
        return api.post('/clientes', data)
    },
    obtenerCliente(id) {
        return api.get('/clientes/' + id)
    }
}