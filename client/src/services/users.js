import api from './apiService'

function getUsers() {
    return api('/users')
    .then(data => data)
}

export {
    getUsers
}