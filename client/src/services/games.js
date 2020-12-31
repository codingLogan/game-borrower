import api from './apiService'

function getGames() {
    return api('/games')
    .then(data => data)
}