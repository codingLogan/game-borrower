/**
 * @returns Promise JSON response
 * @param {string} url 
 * @param {object} options 
 */
function api(url, options = {}) {
    // Return the parsed json from the request as a Promise
    return fetch(`/api${url}`, options)
    .then(response => response.json())
}

export default api