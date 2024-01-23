class DbApi {
  #baseURL = '';

  constructor(baseURL) {
    this.#baseURL = baseURL;
  }

  #dbRequest(endPoint, attr = {}) {
    return fetch(this.#baseURL + endPoint, attr)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .catch(error => console.log(error.message));
  }

  objectGetRequest(endPoint) {
    return this.#dbRequest(endPoint);
  }

  objectCreateRequest(endPoint, obj) {
    return this.#dbRequest(endPoint, {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: { 'Content-Type': 'application/json' },
    });
  }

  objectDeleteRequest(endPoint, id) {
    return this.#dbRequest(`${endPoint}/${id}`, {
      method: 'DELETE',
    });
  }

  ojectUpdateRequest(endPoint, obj) {
    return this.#dbRequest(`${endPoint}/${obj.id}`, {
      method: 'PUT',
      body: JSON.stringify(obj),
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export default DbApi;
