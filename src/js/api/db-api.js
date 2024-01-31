class DbApi {
  #baseURL = '';

  constructor(baseURL) {
    this.#baseURL = baseURL;
  }

  async #dbRequest(endPoint, attr = {}) {
    try {
      const response = await fetch(this.#baseURL + endPoint, attr);
      if (!response.ok) {
        throw new Error(`HTTP error, status: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      throw error;
    }
  }

  async objectGetRequest(endPoint) {
    return this.#dbRequest(endPoint);
  }

  async objectCreateRequest(endPoint, obj) {
    return this.#dbRequest(endPoint, {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: { 'Content-Type': 'application/json' },
    });
  }

  async objectDeleteRequest(endPoint, id) {
    return this.#dbRequest(`${endPoint}/${id}`, {
      method: 'DELETE',
    });
  }

  async objectUpdateRequest(endPoint, obj) {
    return this.#dbRequest(`${endPoint}/${obj.id}`, {
      method: 'PUT',
      body: JSON.stringify(obj),
      headers: { 'Content-Type': 'application/json' },
    });
  }

  async objectPatchRequest(endPoint, obj) {
    const { id, ...rest } = obj;
    return this.#dbRequest(`${endPoint}/${id}/rating`, {
      method: 'PATCH',
      body: JSON.stringify(rest),
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export default DbApi;
