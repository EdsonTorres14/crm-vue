import api from '../lib/axios'

export default {
    obterClientes() {
        return api.get('/clientes')
    },
}